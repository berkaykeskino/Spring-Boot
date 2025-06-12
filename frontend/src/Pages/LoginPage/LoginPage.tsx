import React from 'react'
import LoginForm from '../../Components/LoginForm/LoginForm'
import "./LoginPage.css"

type Props = {}

const LoginPage = (props: Props) => {
  return (
    <div className='loginPage'>
      <LoginForm/>
    </div>
  )
}

export default LoginPage