import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import SlateEditor from '../components/slateEditor/Editor';
import {createBlog} from '../actions';
import {Router} from '../routes';
import { toast } from 'react-toastify';
class BlogEditor extends React.Component{
	constructor(props){
		super(props)
		this.state={
			isSaving:false,
			lockId:Math.floor(1000 + Math.random()*9000)
		}
		this.saveBlog=this.saveBlog.bind(this);
	}

	saveBlog(story,heading)
	{
		const {lockId}=this.state;
		const blog={};
		blog.title=heading.title;
		blog.subTitle=heading.subtitle;
		blog.story=story;
		this.setState({isSaving:true})
			createBlog(blog,lockId).then(createdBlog=>{
				toast.success('Blog is saved successfully');
				this.setState({isSaving:false});
				Router.pushRoute(`/blogs/${createdBlog._id}/edit`)
			}).catch(err=>{
				this.setState({isSaving:false});
				const message=err||'Server Error';
				toast.error(message);
			})
	}
	
	render()
	{
		const {isSaving}=this.state;
		return(
			<BaseLayout {...this.props.auth}>
				<BasePage containerClass="editor-wrapper" className="blog-editor-page">
                    <SlateEditor isLoading={isSaving} save={this.saveBlog}/>
                </BasePage>
			</BaseLayout>
		);
	}
}
export default withAuth('admin')(BlogEditor);