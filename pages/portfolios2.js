import React from 'react';
import BaseLayout from '../components/layout/BaseLayout'
import BasePage from '../components/BasePage'
import withAuth from '../components/hoc/withAuth';
import {Col,Row,Button} from 'reactstrap';
import { getPortfolios,deletePortfolio } from '../actions';
import {Router} from '../routes';
import PortfolioCard from '../components/portfolios/portfoliocard';
class Portfolios2 extends React.Component{
    constructor(props){
      super(props);
      this.renderPortfolios=this.renderPortfolios.bind(this);
    }
  static async getInitialProps({req}){
    let portfolios=[];
    try{
      portfolios=await getPortfolios(req);
    }catch(err){
      console.log(err);
    }
    return {portfolios};
  }
navigateToEdit(portfolioId,e)
{
  e.stopPropagation();
  Router.pushRoute(`/portfolio/${portfolioId}/edit`)
}
  displayDeleteWarning(portfolioId){
    const isConfirm=confirm("Are you sure you want to delete this portfolio?");
    if(isConfirm)
    {
      this.deletePortfolio(portfolioId)
    }
  }
  deletePortfolio(portfolioId){
    deletePortfolio(portfolioId)
    .then(()=>{
      Router.pushRoute("/portfolios");
    }).catch((err)=>{console.error(err)})
  }

  renderPortfolios(portfolios){
    const {isAuthenticated,isSiteOwner}=this.props.auth;
    return portfolios.map((item,index)=>{
      return(
        <Col md="4" key={index}>
          <PortfolioCard item={item}>
          {
            isAuthenticated && isSiteOwner && <React.Fragment>
              <Button color="warning" onClick={(e)=>{
              this.navigateToEdit(item._id,e)
              }}>
                Edit
              </Button>{'  '}
              <Button onClick={()=>{this.displayDeleteWarning(item._id)}} color="danger">
                Delete
              </Button>
            </React.Fragment>
          } 
          </PortfolioCard>
        </Col> 
      )
    })
  }
  render(){
    const {portfolios}=this.props;
    const {isAuthenticated,isSiteOwner}=this.props.auth;
        return(
            <BaseLayout cannonical="/portfolios" {...this.props.auth} title="Debdut saha - Newest Portfolios">
                <BasePage title="Portfolios" className="portfolio-page">
                {isAuthenticated && isSiteOwner && <Button color="success" 
                        onClick={()=>{Router.pushRoute('/portfolios/new')}} 
                        className="create-port-btn">Create Portfolio</Button>}
                <Row>
                  {this.renderPortfolios(portfolios)}
                </Row>             
                </BasePage>
            </BaseLayout>
        );
    }
}
export default Portfolios2;