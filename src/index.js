import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header';
import Navbar from './components/navbar';
import Content from './components/content';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

function App() {
  const [page, setPage] = useState('Home');
  return (
    <div>
      <Header />
      <Navbar setPage={setPage} />
      <Content page={page} />
    </div>
  );
}

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
