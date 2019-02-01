import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';

class portfolio extends React.Component{
	render()
	{
		return(
			<BaseLayout {...this.props.auth}>
			<BasePage>
			<h1>I am from portfolio</h1>
			</BasePage>
			</BaseLayout>
		);
	}
}
export default withAuth()(portfolio);
