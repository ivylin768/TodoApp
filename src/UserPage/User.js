import React, { useState, useEffect } from 'react'

import Header from '../Common/Header'
import Input from './Input'
import TodoList from './TodoList'
import UserFooter from './UserFooter'

const LOCAL_STORAGE_KEY = 'todoMvc_todos';//本地存储的key

export default function User() {
  const [todos, setTodos] = useState([]);
  const [chosen, setChosen] = useState('all');
  let [allCompleted, setAllCompleted] = useState(todos.every(todo => todo.complete === true));//是否全部已完成

  useEffect(() => {//组件初次加载时获取本地存储&更新todos
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    setTodos(storedTodos);
  }, []);

  useEffect(() => {//更新本地存储
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {//一旦更改todos，就尝试更新allCompleted【个别选项影响全选状态】
    const copyTodos = [...todos];
    const nowAllCompleted = copyTodos.every(todo => todo.complete === true);//现在是否全部已完成
    if(nowAllCompleted===allCompleted) {
      return;
    }
    setAllCompleted(nowAllCompleted);
  }, [todos,allCompleted]);

  const chosenTodos = todos.filter(todo => {//过滤出满足Footer所选标签的项
    switch (chosen) {
      case 'completed':
        return todo.complete;
      case 'active':
        return !todo.complete;
      default:
        return todo;
    }
  });

  function toggleTodo(id) {//切换TodoList中某一项的完成态
    const copyTodos = [...todos];
    const todo = copyTodos.find(item => item.id === id);//找到目标项
    todo.complete = !todo.complete;
    setTodos(copyTodos);
  }

  function toggleAll() {//标记所有项为已完成/未完成【全选状态影响个别选项】
    const copyTodos = [...todos];
    allCompleted = copyTodos.every(todo => todo.complete === true);//是否全部已完成
    setAllCompleted(allCompleted);
    if (!allCompleted) {//有未完成项，标记所有项为已完成
      copyTodos.map(todo => todo.complete = true);
    } else {//无未完成项，标记所有项为未完成
      copyTodos.map(todo => todo.complete = false);
    }
    setTodos(copyTodos);
  }

  function updateTodo(id, value) {//更新todo项
    const copyTodos = [...todos];
    const todo = copyTodos.find(item => item.id === id);
    todo.content = value;
    setTodos(copyTodos);
  }

  function deleteTodo(item) {//删除所选项
    const newTodos = todos.filter(todo => todo !== item);
    setTodos(newTodos);
  }

  function handleFilter(type) {//设置过滤条件
    setChosen(type);
  }

    return (
        <div className="card">
            <Header text="todos" />
            <div className="card-body">
            <Input allCompleted={allCompleted} setTodos={setTodos} toggleAll={toggleAll} />
            <TodoList todos={chosenTodos} toggleTodo={toggleTodo} updateTodo={updateTodo} deleteTodo={deleteTodo} />
            </div>
            <UserFooter todos={todos} setTodos={setTodos} handleFilter={handleFilter} />
        </div>
    )
}
