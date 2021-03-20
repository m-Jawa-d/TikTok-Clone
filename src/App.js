import React, { useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Banner from './Banner';
import Basket from './Basket';
import BasketValues from './BasketValues';
import LogInPage from './LogInPage';
import NavBar from './NavBar';
function App() {
  return (
    <>
      <Switch>
        <Route exact path='/'  ><NavBar/><Banner/></Route>
        <Route exact path='/login' component={LogInPage} />
        <Route exact path='/basket' component={Basket} ><NavBar/> <BasketValues/> </Route>
        <Redirect to='/' />
        {/* <Redirect to='' */}
      </Switch>
    </>
  )
}

export default App
