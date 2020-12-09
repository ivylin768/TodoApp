import React from 'react'

import Footer from '../Common/Footer'

export default function UserFooter({ todos, setTodos, handleFilter }) {
    const leftNum = todos.filter(todo => !todo.complete).length;//未完成的项数

    function handleClearTodos() {//清除已完成项
        const unCompletedTodos = todos.filter(todo => !todo.complete);
        setTodos(unCompletedTodos);
    }

    return (
        <div className="card-footer">
            <div className="row align-items-center">
                <div className="col-md-3">
                    <span><span className="p-2 mb-2 rounded bg-info text-white">{leftNum}</span>  {leftNum > 1 ? 'items' : 'item'} left</span>
                </div>
                <div className="col-md-6 btn-group btn-group-toggle" data-toggle="buttons">
                    <label className="btn btn-outline-info active" onClick={() => handleFilter('all')} >
                        <input type="radio" name="options" id="all" defaultChecked />All
                    </label>
                    <label className="btn btn-outline-info" onClick={() => handleFilter('active')} >
                        <input type="radio" name="options" id="active" />Active
                    </label>
                    <label className="btn btn-outline-info" onClick={() => handleFilter('completed')} >
                        <input type="radio" name="options" id="completed" />Completed
                    </label>
                </div>
                <div className="col-md-3">
                    {//只在有已完成项时才显示该button
                        todos.some(todo => todo.complete) ? <button className="btn btn-info" onClick={handleClearTodos}>Clear Completed</button> : null
                    }
                </div>
            </div>
        </div>
    )
}
