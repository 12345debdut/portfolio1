import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';
export default class BaseLayout extends React.Component{
	render()
	{
		const {className,children,isAuthenticated,isSiteOwner,title,cannonical}=this.props;
		const {user}=this.props;
		const headerType=this.props.headerType || 'default';
		return(
			<React.Fragment>
			<Head>
			<title>{title}</title>
			<meta name="description" content="Welcome to the portfolio website of Debdut Saha.Get informed, collaborate and discover projects I was working on through the years!"></meta>
			<meta name="keywords" content="Debdut saha portfolio,Debdut saha blogs,Debdut saha developer,Debdut saha full stack developer,Debdut saha react-native developer,Debdut saha blockchain"></meta>
			<meta property="og:title" content="Debdut saha-developer,programmer,bloger"/>
			<meta property="og:locale" content="hi_in"/>
			<meta property="og:url" content={`${process.env.BASE_URL}`}/>
			<meta property="og:description" content="Welcome to the portfolio website of Debdut Saha."/>
			{cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}/${cannonical}`}></link>}
			<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css" integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/" crossorigin="anonymous"></link>
			<link rel="icon" type="image/ico" href="/static/favicon.ico"></link>
			<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>
			</Head>
			<div className="layout-container">
			<Header className={`port-nav-${headerType}`} isAuthenticated={isAuthenticated} user={user} isSiteOwner={isSiteOwner}/>				
			<main className={`cover ${className}`}>
					<div className="wrapper">
						{children}
					</div>
				</main>
			</div>
			</React.Fragment>
		)
	}
}