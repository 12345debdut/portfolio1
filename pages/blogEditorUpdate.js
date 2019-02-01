import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slateEditor/Editor';
import { getBlogById } from '../actions';
import { updateBlog } from '../actions';
import {toast} from 'react-toastify';
class BlogEditorUpdate extends React.Component{
    static async getInitialProps({query}){
        const blogId=query.id;
        let blog={}
        try{
             blog=await getBlogById(blogId);
        }catch(err){
            console.warn("Here is the error"+err)
        }
        return {blog}
    }
    constructor(props){
		super(props)
		this.state={
			isSaving:false
        }
        this.updateBlog=this.updateBlog.bind(this);
    }
    
    updateBlog(story,heading)
	{
        const {blog}=this.props;
        const updatedBlog={}
		updatedBlog.title=heading.title;
		updatedBlog.subTitle=heading.subtitle;
		updatedBlog.story=story;
		this.setState({isSaving:true})
		updateBlog(updatedBlog,blog._id).then(updatedBlog=>{
			toast.success('Blog Updated Successfully')
			this.setState({isSaving:false});
		}).catch(err=>{
			this.setState({isSaving:false});
			const message=err.message ||'Server Error';
			toast.error(message)
			console.error(err);
		})
		
	}
	
	render()
	{
        const {isSaving}=this.state;
        const {blog}=this.props;
		return(
			<BaseLayout {...this.props.auth}>
				<BasePage containerClass="editor-wrapper" className="blog-editor-page">
                    <SlateEditor isLoading={isSaving} initialValue={blog.story} save={this.updateBlog}/>
                </BasePage>
			</BaseLayout>
		);
	}
}
export default withAuth('admin')(BlogEditorUpdate);