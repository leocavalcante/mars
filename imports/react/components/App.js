import React from 'react'
import Layout from 'antd/lib/layout'
import Button from 'antd/lib/button'
import Form from 'antd/lib/form'
import Input from 'antd/lib/input'
import { string, func, array } from 'prop-types'

const { Content }  = Layout

const App = ({ label, onSubmit, messages }) => {
  return (
    <Layout className="layout">
      <Content className="content">
        <Form layout="inline" onSubmit={onSubmit}>
          <Form.Item>
            <Input name="body" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">{label}</Button>
          </Form.Item>
        </Form>

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
