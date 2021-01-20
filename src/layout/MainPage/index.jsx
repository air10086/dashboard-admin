import React from 'react'
import { Input } from 'antd'
import styles from './index.module.scss'
export default function MainPage({ title = '', children, className = '' }) {
  return (
    <div className={styles.root}>
      <div className={styles.title}>{title}</div>
      <div className={`${className} ${styles['main-page']}`}>{children}</div>
    </div>
  )
}
