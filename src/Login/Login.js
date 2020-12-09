import React from 'react'

import Header from '../Common/Header'
import Footer from '../Common/Footer'
import UserName from './UserName'
import Password from './Password'
import LoginFooter from './LoginFooter'

export default function Login({loginResult}) {

    return (
        <div className="card">
            <Header text="login" />
            <div className="card-body">
                <UserName />
                <Password />
            </div>
            <div className="card-footer">
                <div className="row align-items-center">
                    <LoginFooter loginResult={loginResult} />
                </div>
            </div>
        </div>
    )
}
