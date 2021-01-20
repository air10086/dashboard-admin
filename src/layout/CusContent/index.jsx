import React from 'react'
import routerConfig from '@/routerConfig'
import { Layout } from 'antd'
import { Switch, Route, Redirect } from 'react-router-dom'
import styles from './index.module.scss'
export default function CusContent() {
  const renderRouteItem = item => {
    if (item.component === void 0) {
      return <></>
    }
    return (
      <Route
        exact
        key={item.path}
        path={item.path}
        component={item.component}
      ></Route>
    )
  }

  const renderRouteList = list =>
    list.reduce((acc, item) => {
      if (item.children === void 0) {
        acc.push(renderRouteItem(item))
        return acc
      }
      item.children.forEach(subItem => {
        acc.push(renderRouteItem(subItem))
      })
      return acc
    }, [])

  return (
    <Layout.Content className={styles.root}>
      <Switch>
        <Redirect exact from="/" to={routerConfig[0].path} />
        {renderRouteList(routerConfig)}
        <Redirect from="*" to="/404" />
      </Switch>
    </Layout.Content>
  )
}
