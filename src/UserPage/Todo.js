import React, { useState, useRef } from 'react'

export default function Todo({ todo, toggleTodo, updateTodo, deleteTodo }) {
    const [hide, setHidden] = useState(true);
    const [edit, setEdit] = useState(false);
    const todoContentRef = useRef();

    function handleTodoClick() {
        toggleTodo(todo.id);
    }

    function handleTodoDblClick() {//双击编辑todo项
        if (edit === true) {//已经双击过，内容已经存在input，不做任何操作
            return;
        } else {
            setEdit(true);//进入编辑状态
        }
    }

    function editTodo() {
        const editedTodo = todoContentRef.current.value;
        updateTodo(todo.id, editedTodo);
    }

    function handleEditDone() {//编辑完成
        setEdit(false);//退出编辑状态
    }

    function handleEnter(e) {
        if (e.keyCode === 13) {//回车
            handleEditDone();
        }
    }

    function handleTodoDelete() {
        deleteTodo(todo);
    }

    return (
        <li className="list-group-item text-left" onDoubleClick={handleTodoDblClick} onMouseOver={() => setHidden(false)} onMouseOut={() => setHidden(true)}>
            {
                edit ?
                    <input className="form-control" ref={todoContentRef} type="text" value={todo.content} autoFocus="autofocus" onChange={editTodo} onBlur={handleEditDone} onKeyDown={handleEnter} /> :
                    <div className="form-check">
                        <input id={todo.id} className="form-check-input" type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
                        <label htmlFor={todo.id} className="form-check-label">{todo.content}</label>
                        <button type="button" className="close text-danger" aria-label="关闭" hidden={hide} onClick={handleTodoDelete}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
            }
        </li>
    )
}
