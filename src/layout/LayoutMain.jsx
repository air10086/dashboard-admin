import React from 'react'
import { Layout } from 'antd'
import constant from './constant'
import CusHeader from './CusHeader'
import CusContent from './CusContent'
import CusSider from './CusSider'

const LayoutMain = () => {
  return (
    <Layout style={{ height: '100%' }}>
      <Layout
        style={{ minWidth: constant.MIN_SCREEN_WIDTH - constant.SIDER_WIDTH }}
      >
        <CusHeader />
        <Layout>
          <CusSider />
          <CusContent />
        </Layout>
      </Layout>
    </Layout>
  )
}

export default LayoutMain
