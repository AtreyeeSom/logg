import React from 'react'
import { Route,Switch,BrowserRouter as Router } from 'react-router-dom'
import Login from '../../Login/login'
import Dashboard from '../dashboard'
import Header from '../header'
import Home from '../home'
import Logout from '../logout'


const Routes = () => {
  return (
    <div>
        <Router>
            <Header/>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/home" component={Home}/>
                <Route path="/log" component={Logout}/>
                <Route path="/dash" component={Dashboard}/>
            </Switch>
        </Router>
    </div>
  )
}

export default Routes