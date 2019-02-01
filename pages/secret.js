import React from 'react';
import BaseLayout from '../components/layout/BaseLayout';
import BasePage from '../components/BasePage';
import withAuth from '../components/hoc/withAuth';
import {getSecretData} from '../actions/index';
class Secret extends React.Component{
	constructor(props){
		super(props)
		this.state={
			secretData:[]
		}
	}
	static async getInitialProps({req}){
		const anotherSecretData=await getSecretData(req);
		return {anotherSecretData}
	}
	async componentDidMount(){
		const secretData=await getSecretData();
		this.setState({
			secretData
		});
	}
	displaySecretData(){
		const {secretData}=this.state;
		if(secretData && secretData.length>0)
		{
			return secretData.map((item,i)=>{
				return(
					<div key={i}>
						<p>{item.title}</p>
						<p>{item.description}</p>
					</div>
				)
			})
		}
	}
	render()
    {
		const {anotherSecretData}=this.props.pageprops;
		return(
            <BaseLayout {...this.props.auth}>
	 		<BasePage>
			 <h1>I am from secret</h1>
			 {this.displaySecretData()}			
	 		</BasePage>
		    </BaseLayout>
		);
	}
}
export default withAuth()(Secret);