import React from 'react'
import { Layout, Button } from 'antd'
import { string, func, array } from 'prop-types'

const { Content }  = Layout

const App = ({ label, onClick, messages }) => {
  return (
    <Layout className="layout">
      <Content className="content">
        <Button type="primary" onClick={onClick}>{label}</Button>

        <ul>
          {messages.map(message => <li>{message.body}</li>)}
        </ul>
      </Content>
    </Layout>
  )
}

App.propTypes = {
  label: string,
  onClick: func,
  messages: array,
}

export default App
