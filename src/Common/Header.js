import React from 'react'

export default function Header( text ) {
    return (
        <div className="card-header text-info">
            <h1>{ text.text }</h1>
        </div>
    )
}
