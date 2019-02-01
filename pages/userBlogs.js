import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import {Container,Row,Col} from 'reactstrap';
import withAuth from '../components/hoc/withAuth';
import {getUserBlogs,updateBlog,deleteBlog} from '../actions/index';
import {Link} from '../routes';
import {Button} from 'reactstrap'
import ButtonDropDown from '../components/ButtonDropDown';
import { Router } from '../routes';
class UserBlogs extends React.Component{
    static async getInitialProps({req}){
        let blogs=[];
        try{
            blogs=await getUserBlogs(req);
        }catch(err){
            console.error(err);
        }
        return {blogs};
		}
		changeBlogStatus(blogId,status){
			updateBlog({status},blogId)
			.then(()=>{
				alert("You have published your blog")
				Router.pushRoute('/userBlogs')
			}).catch((err)=>{
				console.error(err);
			})
		}
		deleteBlog(blogId){
			deleteBlog(blogId).then(status=>{
				Router.pushRoute('/userBlogs')
			}).catch((err)=>{
				console.error(err.message);
			})
		}
		separateBlogs(blogs){
			const published=[];
			const drafts=[];
			blogs.forEach((blog)=>{
				blog.status==='draft'?drafts.push(blog):published.push(blog);
			})
			return {published,drafts}
		}
		deleteBlogWarning(blogId){
			const res=confirm('Are you sure you want to delete blog post?');
			if(res){
				this.deleteBlog(blogId)
			}
		}
createStatus(status)
{
	return status==='draft'?{view:'publish story',value:'published'}
													:{view:'Make a draft',value:'draft'}
}
dropdownOptions=(blog)=>{
	const blogState=this.createStatus(blog.status);
	return [
		{text:blogState.view,handlers:{onClick:()=>this.changeBlogStatus(blog._id,blogState.value)}},
		{text:'Delete',handlers:{onClick:()=>this.deleteBlogWarning(blog._id)}}
	]
}

		renderBlogs(blogs){
			return (
				<ul className="user-blogs-list">
				{
					blogs.map((blog,index)=>(
						<li key={index}>
							<Link route={`/blogs/${blog._id}/edit`}>
								<a className="html-content">{blog.title}</a>
							</Link>
							<ButtonDropDown items={this.dropdownOptions(blog)}/>
						</li>
					))
				}
				
				</ul>
			)
		}
	render()
	{
		const {blogs}=this.props;
		const {drafts,published}=this.separateBlogs(blogs)
		return(
            <BaseLayout {...this.props.auth} headerType={'landing'} className="blog-listing-page">
			<div className="masthead" style={{"backgroundImage": "url('/static/images/home-bg.jpg')"}}>
			  <div className="overlay"></div>
			  <Container>
				<div className="row">
				  <div className="col-lg-8 col-md-10 mx-auto">
					<div className="site-heading">
					  <h1>DashBoard</h1>
						<span className="subheading">
						Ohh!! Yes there are all blogs please checkit out <Link route='/blogs/new'>
						<Button color="primary" style={{marginTop:10}}>Create New blog</Button>
						</Link>	</span>
					</div>
				  </div>
				</div>
			  </Container>
			</div>
			<BasePage className="blog-user-page">
			<Row>
                <Col md="6" className="mx-auto text-center">		
								<h2 className="blog-status-title">Published Blogs</h2>
										{this.renderBlogs(published)}								
										</Col>
                <Col md="6" className="mx-auto text-center">
									 <h2 className="blog-status-title">Drafted Blogs</h2>
									 {this.renderBlogs(drafts)}
                </Col>
				  </Row>
			</BasePage>
		  </BaseLayout>
		);
	}
}
export default withAuth('admin')(UserBlogs);