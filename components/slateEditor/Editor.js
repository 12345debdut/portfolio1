import { Editor } from 'slate-react'
import ControllMenu from './ControllMenu';
import HoverMenu from './hovermenu';
import React from 'react';
import {renderMark,renderNode} from './renderer/index';
import {initialValue} from './initialvalue';
import Html from 'slate-html-serializer'
import {rules} from './rules'; 
import { Value } from 'slate'
const html = new Html({ rules })
// Define our app...
export default class SlateEditor extends React.Component {
    // Set the initial value when the app is first constructed.
    state = {
      value:Value.create(),
      isloaded:false
    }
    constructor(props){
      super(props);
      this.onKeyDown=this.onKeyDown.bind(this);
    }
    componentDidMount(){
      const value=this.props.initialValue?Value.fromJSON(html.deserialize(this.props.initialValue)):initialValue;
        this.updateMenu();
        this.setState({value:value})
        this.setState({isloaded:true})
    }
    componentDidUpdate(){
        this.updateMenu()
    }
    // On change, update the app's React state with the new editor value.
    onChange = ({ value }) => {
      this.setState({ value })
    }

onKeyDown(event,change,next){
  const {isLoading}=this.props;
  if(!isLoading && event.which==83 && (event.ctrlKey || event.metaKey)){
    event.preventDefault();
    this.save();
    return;
  }
  next();
}



      updateMenu = () => {
        const menu = this.menu
        if (!menu) return
    
        const { value } = this.state
        const { fragment, selection } = value
    
        if (selection.isBlurred || selection.isCollapsed || fragment.text === '') {
          menu.removeAttribute('style')
          return
        }
    
        const native = window.getSelection()
        const range = native.getRangeAt(0)
        const rect = range.getBoundingClientRect()
        menu.style.opacity = 1
        menu.style.top = `${rect.top + window.pageYOffset - menu.offsetHeight}px`
    
        menu.style.left = `${rect.left +
          window.pageXOffset -
          menu.offsetWidth / 2 +
          rect.width / 2}px`
      }
      renderEditor = (props, editor, next) => {
        const children = next()
        const {isLoading}=props;
        return (
          <React.Fragment>
          <ControllMenu isLoading={isLoading}  save={()=>{this.save()}}></ControllMenu>
            {children}
            <HoverMenu innerRef={menu => (this.menu = menu)} editor={editor} />
          </React.Fragment>
        )
      }
      getTitle(){
        const {value}=this.state;
        const firstBlock=value.document.getBlocks().get(0)
        const secondBlock=value.document.getBlocks().get(1)
        
        const title=firstBlock && firstBlock.text?firstBlock.text:"No Title"
        const subtitle=secondBlock && secondBlock.text?secondBlock.text:"No Title"        
        return {
          title,
          subtitle
        }
      }
      save(){
        const {value}=this.state;
        const {save,isLoading}=this.props
        const headingValues=this.getTitle();
        const text=html.serialize(value);
        !isLoading && save(text,headingValues);
      }
   // Render the editor.
    render() {
        const {isloaded}=this.state;
        return(
        <React.Fragment>
        {
        isloaded && 
        <Editor {...this.props}
        placeholder="Enter you blog story....."
        value={this.state.value}
         onChange={this.onChange}
         renderNode={renderNode} 
         renderEditor={this.renderEditor}
         renderMark={renderMark}
         onKeyDown={this.onKeyDown}
         />         
        }
        </React.Fragment>
    );
    }
  }