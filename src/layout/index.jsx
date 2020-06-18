import React from 'react'
import { Switch, Route } from 'react-router-dom'
import NotFound from '@/pages/NotFound'
import LayoutMain from './LayoutMain'

const LayoutIndex = () => (
  <Switch>
    <Route path="/404" component={NotFound}></Route>
    <Route path="/" render={() => <LayoutMain />}></Route>
  </Switch>
)

export default LayoutIndex
