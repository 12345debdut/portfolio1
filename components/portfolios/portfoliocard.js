import React,{Component} from 'react'
import {Button,Card,CardHeader,CardBody,CardTitle,CardText} from 'reactstrap';
import PortfolioCardDetail from './portfoliocarddetail';
export default class PortfolioCard extends Component{
    constructor(props) {
        super(props);
        this.state = {
          isOpen: false
        };
    
        this.handletoggle = this.handletoggle.bind(this);
      }
    handletoggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(){
        const {item,children} =this.props;
        const {isOpen}=this.state;
        return(
        <span onClick={this.handletoggle}>
        <PortfolioCardDetail toggle={this.handletoggle} portfolio={item} isOpen={isOpen}/>
            <Card className="portfolio-card">
              <CardHeader className="portfolio-card-header">{item.position}</CardHeader>
                <CardBody>
                  <p className="portfolio-card-city">{item.location} </p>
                    <CardTitle className="portfolio-card-title">{item.title}</CardTitle>
                    <CardText className="portfolio-card-text">{item.description}</CardText>
                    <div className="readMore">
                        {children}
                    </div>
                  </CardBody>
                </Card>
            </span>
        );
    }
}