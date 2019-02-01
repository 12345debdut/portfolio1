import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import {getBlogBySlug} from '../actions';
import {Row,Col} from 'reactstrap';
class BlogDetail extends React.Component{
    
    static async getInitialProps({query}){
        let blog={};
        const slug=query.slug;
        try{
            blog=await getBlogBySlug(slug);
        }catch(err){
            console.error(err);
        }
        return {blog};
    }

    render()
	{
        const {blog}=this.props;
        console.log(blog);
		return(
			<BaseLayout {...this.props.auth}>
				<BasePage className="blog-detail-page">
                <Row>
                <Col md="8" md={{size:6,offset:3}}>
                    <div dangerouslySetInnerHTML={{__html:blog.story}} className="html-content"></div>
                </Col>
                </Row>
                </BasePage>
			</BaseLayout>
		);
	}
}
export default withAuth()(BlogDetail);