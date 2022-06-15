import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/Login";
import './style/style.scss'
import Test from "./components/GoogleLoginTest";


const root = ReactDOM.createRoot(
  document.getElementById('weeboo') as HTMLElement
);
root.render(<Test />);