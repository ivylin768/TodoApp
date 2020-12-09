import React from 'react'

export default function UserName() {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <span className="input-group-text" id="userName">用户名</span>
            </div>
            <input type="text" className="form-control" />
        </div>
    )
}
