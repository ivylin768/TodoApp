import React from 'react'

export default function LoginFooter({loginResult}) {
    function handleRegister() {
        loginResult('register failed');
    }

    function handleLogin() {
        loginResult('login failed');
    }

    return (
        <>
                <div className="col-md-6">
                    <button className="btn btn-outline-info col-6" onClick={handleRegister}>注册并登录</button>
                </div>
                <div className="col-md-6">
                    <button className="btn btn-info col-6" onClick={handleLogin}>登录</button>
                </div>
        </>
    )
}
