import { Link } from '@remix-run/react'
import { Button, Input } from 'antd'
import type { MetaFunction } from '@remix-run/node'

export const meta: MetaFunction = () => {
  return [{ title: 'New Remix App' }, { name: 'description', content: 'Welcome to Remix!' }]
}

const Home = () => {
  return (
    <div className="font-sans p-4">
      <h1 className="text-3xl">Welcome to Remix</h1>
      <div>
        <p>
          <Link to="/login">
            <span>Login</span>
          </Link>
        </p>
        <p>
          <Link to="/register">
            <span>Register</span>
          </Link>
        </p>
        <Button type="primary">
          <span>Remix</span>
        </Button>
        <Input />
      </div>
    </div>
  )
}

export default Home
