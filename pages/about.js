import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import {Row,Col} from 'reactstrap'
class About extends React.Component{
	render()
	{
		return(
			<BaseLayout {...this.props.auth} title="Debdut saha - About">
				<BasePage className="about-page">
				<Row className="mt-5">
				<Col md="6">
				  <div className="left-side">
					<h1 className="title fadein">Hello, Welcome</h1>
					<h4 className="subtitle fadein">To About Page</h4>
					<p className="subsubTitle fadein">Feel free to read short description about me.</p>
				  </div>
				</Col>
				<Col md="6">
				  <div className="fadein">
					<p>My name is Debdut Saha and I am a student persuing B.tech.</p>
					<p>
						I have done my B.Tech from Rcc Institute of Information Technology. These are some technology lovers
						arround the globe i am also one of them.My thinking process my passion is computer after experincing
						the joy of doing coding in different languages and also diving into different projects.
					</p>
					<p>
					Throughout my career, I have acquired a basic technical knowledge and the ability to explain
					programming topics clearly and in detail to a broad audience. I have teached several students about
					programming throughout my B.Tech degree. I invite you to take a look on my portfolios and enjoy the joy of coding.
					I have put a lot of effort to enhance my experince in programming field.
					</p>
				  </div>
				</Col>
			  </Row>
				</BasePage>
			</BaseLayout>
		);
	}
}
export default withAuth()(About);