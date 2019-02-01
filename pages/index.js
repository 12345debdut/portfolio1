import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import Typed from 'react-typed';
import {Container,Row,Col} from 'reactstrap';
export default class Index extends React.Component{
	constructor(props){
		super(props)
		this.state={
			self:["This My new Website" ,"It is cool","Oh not cool?","Checkout Other Pages"],
			isFlipping:false
		}
	}
  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 60000);
  }

	render()
	{
		const { isAuthenticated, user } = this.props.auth;
		const {isFlipping}=this.state;
		return(
			<BaseLayout 
			className={`${isFlipping?'cover-1':'cover-0'}`} 
			{...this.props.auth} headerType="index" title="Debdut saha-Portfolio">
			<div className="main-section">
			  <div className="background-image">
				<img src="static/images/background-index.png" />
			  </div>
			  <Container>
				<Row>
				  <Col md="6">
					<div className="hero-section">
					  <div className={`flipper ${isFlipping ? 'isFlipping':''}`}>
						<div className="front">
						  <div className="hero-section-content">
							<h2> Full Stack Web Developer </h2>
							<div className="hero-section-content-intro">
							  Have a look at my portfolio and coding strength
							</div>
						  </div>
						  <img alt="Porgramming welcome picture" className="image" src="/static/images/section-1.png"/>
						  <div className="shadow-custom">
							<div className="shadow-inner"> </div>
						  </div>
						</div>
						<div className="back">
						<div className="hero-section-content">
						<h2> Android Developer(React Native) </h2>
						<div className="hero-section-content-intro">
							Have a look at my portfolio and coding strength
						</div>
						</div>
						<img alt="Porgramming welcome picture" className="image" src="/static/images/section-2.png"/>
						<div className="shadow-custom shadow-custom-2">
						<div className="shadow-inner"> </div>
						</div>
					</div>
					  </div>
					</div>
				  </Col>
				  <Col md="6" className="hero-welcome-wrapper">
					<div className="hero-welcome-text">
						<h1>
					{ isAuthenticated && <span> <b> {user.name} </b> </span> }
						Welcome to the portfolio website of Debdut Saha.
						Get informed, collaborate and discover projects I was working on through the years!
					  </h1>
					</div>
					<div className="hero-welcome-bio">
					<Typed
						loop
						typeSpeed={60}
						backSpeed={60}
						strings={this.state.self}
						smartBackspace
						shuffle={false}
						backDelay={1000}
						loopCount={0}
						showCursor
						cursorChar="|"
						className="self-typed"
						/>
					  <h1>
						Let's take a look on my work.
					  </h1>
					</div>
				  </Col>
				</Row>
			  </Container>
			</div>
		  </BaseLayout>		  
		);
	}
}