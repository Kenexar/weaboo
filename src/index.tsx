import React from 'react';
import ReactDOM from 'react-dom/client';
import Dashboard from './components/dashboard/Dashboard';
import './style/style.scss'
import Cookies from "universal-cookie"

const cookies = new Cookies();

console.log(cookies.get('logged'))

const root = ReactDOM.createRoot(
  document.getElementById('weeboo') as HTMLElement
);
root.render(<Dashboard />);