import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortFolioCreateForm from '../components/portfolios/portfolioForm';
import {Row,Col} from 'reactstrap';
import {Router} from '../routes';
import moment from 'moment';

const INITIALVALUES={
    title:'',
    company:'',
    location:'',
    position:'',
    description:'',
    startdate:'',
    enddate:moment()
}

import {createPortfolio} from '../actions/index';
class PortfolioNew extends React.Component{
	constructor(props){
		super(props);
		this.state={
			error:undefined
		}
		this.savePortfolio=this.savePortfolio.bind(this);
	}
	savePortfolio(portfolioData,{setSubmitting}){
		setSubmitting(true);
		createPortfolio(portfolioData)
		.then((portfolio)=>{
			setSubmitting(false);
			Router.pushRoute('/portfolios')
		}).catch((err)=>{
			setSubmitting(false);
			this.setState({error:err.message})
		})
	}	
	render()
	{
		const {error}=this.state;
		return(
			<BaseLayout {...this.props.auth}>
				<BasePage title="Create New Portfolio">
				<Row>
				<Col md="6">
				<PortFolioCreateForm initialValues={INITIALVALUES} error={error} onSubmit={this.savePortfolio}/>
				</Col>
				</Row>
				</BasePage>
			</BaseLayout>
		);
	}
}
export default withAuth('admin')(PortfolioNew);