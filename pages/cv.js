import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import {Row,Col} from 'reactstrap';
class Cv extends React.Component{
	render()
	{
		return(
			<BaseLayout {...this.props.auth} title="Debdut saha - Checkout My Details">
			<BasePage title="Get My CV" className="cv-page">
				<Row>
					<Col md={{size:8,offset:2}}>
						<div className="cv-title">
							<a download="Debdut_saha_cv.pdf" className="btn btn-success" href="/static/Debdut_saha_cv.pdf">
							Download
							</a>
						</div>
						<iframe src="/static/Debdut_saha_cv.pdf" style={{width:'100%',height:'800px'}}></iframe>
					</Col>
				</Row>
			</BasePage>
			</BaseLayout>
		);
	}
}
export default withAuth()(Cv);