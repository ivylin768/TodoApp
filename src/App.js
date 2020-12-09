import React, { useState, useEffect } from 'react';

import Login from './Login/Login'
import User from './UserPage/User'
import AlertToast from './Login/AlertToast'

function App() {
  const [page,setPage]=useState('default');//控制页面显示

  function loginResult(type) {
    setPage(type);
  }

  function showPage() {//切换页面显示
    switch(page) {
      case 'success':
        return <User />;
      case 'register failed':
        return <>
          <Login loginResult={loginResult} />
          <AlertToast type={page} />
        </>;
      case 'login failed':
        return <>
          <Login loginResult={loginResult} />
          <AlertToast type={page} />
        </>;
      default:
        return <Login loginResult={loginResult} />
    }
  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-8 offset-md-2">
          { 
            showPage()
          }
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
