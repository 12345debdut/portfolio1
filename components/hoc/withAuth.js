import React from 'react';
import BasePage from '../BasePage';
import BaseLayout from '../layout/BaseLayout';
export default function(role){
    return function(Component){
        return class withAuth extends React.Component{
            static async getInitialProps(args){
                const pageProps=await Component.getInitialProps && await Component.getInitialProps(args);
                return {...pageProps};
            }
            renderProtectedPage(){
                const {isAuthenticated,user}=this.props.auth;
                const userRole=user && user[`${process.env.NAMESPACE}/roles`];
                let isAuthorized=false;
                console.log(userRole);
                if(role){
                    if(userRole && userRole===role){
                        isAuthorized=true;
                    }
                }else{
                    isAuthorized=true;
                }
                if(!isAuthenticated){
                    return(<BaseLayout {...this.props.auth}>
                    <BasePage>
                    <h1>Please login to display things in our Application</h1>			
                    </BasePage>
                    </BaseLayout>)
                }else if(!isAuthorized){
                    return(
                    <BaseLayout {...this.props.auth}>
                    <BasePage>
                    <h1>you are not authorized.You dont have permission to visit this page</h1>			
                    </BasePage>
                    </BaseLayout>
                    )
                }
                else{
                    return(<Component {...this.props}/>)
                }
            }
            render()
            {
                return(
                    this.renderProtectedPage()
                );       
             }
        }
    }
}
    