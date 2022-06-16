import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/Login";
import './style/style.scss'


const root = ReactDOM.createRoot(
  document.getElementById('weeboo') as HTMLElement
);
root.render(<Login />);