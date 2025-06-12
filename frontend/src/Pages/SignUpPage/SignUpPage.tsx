import React from 'react'
import CreateUserTab from '../../Components/CreateUser/CreateUserTab'
import "./SignUpPage.css"

interface Props {}

const SignUpPage = (props: Props) => {
  return (
    <div className='signUpPage'>
      <CreateUserTab/>
    </div>
  )
}

export default SignUpPage