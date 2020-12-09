import React from 'react'

export default function AlertToast({type}) {
    
    return (
        <div>
            {type==="login failed"?"登录失败！请检查您的用户名或密码！":"注册失败！用户名已存在！"}
        </div>
    )
}
