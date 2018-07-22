import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../components/HomeComponent'
import Login from './Login'
import Register from './Register'
import Todos from './Todos'
import { PrivateRoute } from './PrivateRoute'

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/login' component={Login}/>
      <Route path='/register' component={Register}/>
      <PrivateRoute path='/todos' component={Todos} />
    </Switch>
  </main>
)

export default Main
