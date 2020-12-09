import React, { useRef } from 'react'
import uuidv4 from 'uuid/dist/v4'

export default function Input({ allCompleted, setTodos, toggleAll }) {
    const todoContentRef = useRef();

    function handleAddTodo(e) {
        if (e.keyCode === 13) {//回车增加todo
            const newTodo = todoContentRef.current.value;
            if (newTodo === '') { return; }
            // console.log(newTodo);
            setTodos(prevTodos => {
                return [...prevTodos, { id: uuidv4(), content: newTodo, complete: false }];
            });//更新todos
            todoContentRef.current.value = null;//清空输入框
        }
    }

    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <div className="input-group-text">
                    <input id="toggle-all" type="checkbox" checked={allCompleted} onChange={toggleAll} />
                </div>
            </div>
            <input className="form-control" ref={todoContentRef} type="text" placeholder="What needs to be done?" onKeyDown={handleAddTodo} />
        </div>
    )
}
