import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';  // Make sure this line is present
import App from './App';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
