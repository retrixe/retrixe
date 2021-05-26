import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'

const Main = () => (
  <div>
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/users'>Users</Link>
        </li>
      </ul>
    </nav>
    <Switch>
      <Route path='/about'>
        <p>About</p>
      </Route>
      <Route path='/users'>
        <p>Users</p>
      </Route>
      <Route path='/'>
        <p>Home</p>
      </Route>
    </Switch>
  </div>
)

export default Main
