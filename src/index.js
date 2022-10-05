import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'antd/dist/antd.min.css';// css ant
import { Provider } from 'react-redux';
import store from '../src/redux/store';
import { BrowserRouter } from 'react-router-dom';
import '../src/assets/layout/_login.scss';
import '../src/assets/layout/_admin.scss';
import '../src/assets/responsive/_responsive.scss';
import 'react-notifications/lib/notifications.css'; // css notification
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
