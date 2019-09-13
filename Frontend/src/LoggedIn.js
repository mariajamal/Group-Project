import React,{Component} from 'react';
import {BrowserRouter as Router,Route, Switch, Link, NavLink} from 'react-router-dom';
import LogNav from './LoginNav'
import Profile from './UserProfile/Profile'
import Jobs from './Jobs'
import Posts from './Posts'
class LoggedIn extends Component{
    render(){
        console.log("LoggedIn",this.props.posts)
    return(
        <div>
        	<LogNav/>

          <div className="row" style={{marginTop:"10%"}}>
          <div class="col-md-4">
          <Profile/>
          </div>
          <div class="col-md-8">
             <Switch>
                   <Route path="/jobs" component={Jobs}/> 
	               <Route path="/posts" component={Posts}/>
                   <Route path="/" component={Jobs}/>
             </Switch>
          </div>
          </div>
        </div>
    )
}}

export default LoggedIn;