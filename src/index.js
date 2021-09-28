import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Header from './components/Header';
import App from './components/App';
import { store } from './redux/store';
import './styles.css'



ReactDOM.render(
  <Provider store = {store}>
      <Header/>
    <App />
  </Provider>,
  document.getElementById('root')
);
