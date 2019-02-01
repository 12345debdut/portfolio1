import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import PortFolioCreateForm from '../components/portfolios/portfolioForm';
import {Row,Col} from 'reactstrap';
import {Router} from '../routes';
import {getPortfolioById,updatePortfolio} from '../actions/index';
class PortfolioEdit extends React.Component{
    static async getInitialProps({query}){
        let portfolios={}
        try{
			portfolios=await getPortfolioById(query.id);
			console.log(portfolios);
        }catch(err){
            console.error(err);
		}
		return {portfolios};
    }
	constructor(props){
		super();
		this.state={
			error:undefined,
		}
		this.updatePortfolio=this.updatePortfolio.bind(this);
	}
	updatePortfolio(portfolioData,{setSubmitting}){
		setSubmitting(true);
		updatePortfolio(portfolioData)
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
		const { portfolios }=this.props;
		return(
			<BaseLayout {...this.props.auth}>
				<BasePage title="Update Portfolio">
				<Row>
				<Col md="6">
				<PortFolioCreateForm initialValues={portfolios} error={error} onSubmit={this.updatePortfolio}/>
				</Col>
				</Row>
				</BasePage>
			</BaseLayout>
		);
	}
}
export default withAuth('admin')(PortfolioEdit);