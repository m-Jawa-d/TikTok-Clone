import React from 'react'
import { Switch, Route,Redirect} from 'react-router-dom';
import App from './App';
import StartPage from './StartPage';
function Interlink() {
    return (
        <Switch>
            <Route exact  path="/" component={StartPage}/> 
            <Route exact  path="/Contact" component={App}/> 
            <Redirect to="/" />
        </Switch>
    )
}

export default Interlink;