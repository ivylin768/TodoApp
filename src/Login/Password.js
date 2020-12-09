import React from 'react'

export default function Password() {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text" id="password">密码</span>
            </div>
            <input type="password" className="form-control" />
        </div>
    )
}
