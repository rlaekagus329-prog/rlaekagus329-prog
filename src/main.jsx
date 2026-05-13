import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/global.css'

// index.html에 있던 텅 빈 무대(<div id="root">)를 찾아와서
// 그 위에 사령탑인 <App />을 올리는(render) 작업!
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)