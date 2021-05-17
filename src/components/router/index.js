import React from 'react'
import { Switch, Route } from 'react-router-dom'
import GlobalFeed from "../global-feed";
import Article from "../article";
import Authentication from '../authentication'

export default () => {
	return (
		<Switch>
			<Route path='/' component={GlobalFeed} exact />
			<Route path='/login' component={Authentication} />
			<Route path='/article:slug' component={Article} />
		</Switch>
	)
}