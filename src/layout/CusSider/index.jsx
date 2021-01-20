import React, { useState } from 'react'
import { Layout, Menu } from 'antd'
import styles from './index.module.scss'
import { useLocation, Link } from 'react-router-dom'
import routerConfig from '@/routerConfig'
import constant from '@/constant/regExps'
export default function CusSider() {
  const location = useLocation()

  const resetSelected = () => {
    const selected = location.pathname.match(constant.unNumber)['input']
    return [`${selected}`]
  }

  // 在首次渲染执行，获得初始值
  const [defaultOpenKeys] = useState(() => {
    return routerConfig.reduce((acc, item, index) => {
      if (!item.children) {
        return acc
      }
      item.children.forEach(subItem => {
        if (subItem.path === location.pathname) {
          acc.push(`${index}`)
        }
      })
      return acc
    }, [])
  })

  const renderMenus = list =>
    list.reduce((acc, item, index) => {
      if (item.children === void 0) {
        acc.push(
          <Menu.Item key={item.path}>
            <Link to={item.path}>
              {/* {item.icon ? item.icon : <UserOutlined></UserOutlined>} */}
              {item.name}
            </Link>
          </Menu.Item>,
        )
        return acc
      }
      acc.push(
        <Menu.SubMenu
          className={styles.menu_sub}
          popupClassName={styles.pop_menu}
          key={`${index}`}
          title={<span>{item.name}</span>}
        >
          {renderMenus(item.children)}
        </Menu.SubMenu>,
      )
      return acc
    }, [])

  return (
    <Layout.Sider className={styles.sider} width={240}>
      <div className={styles.logo}>
        <h3 className={styles.logo__title}>智慧餐厅</h3>
      </div>

      <Menu
        className={styles.menu}
        mode="inline"
        theme="dark"
        selectedKeys={resetSelected()}
        defaultOpenKeys={defaultOpenKeys}
      >
        {renderMenus(routerConfig)}
      </Menu>
    </Layout.Sider>
  )
}
