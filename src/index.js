import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './redux/redux-store';
import reportWebVitals from './reportWebVitals';
import '@fontsource/roboto/500.css';

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>

      <Provider store={store}>
        <App />
      </Provider>

    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'));

reportWebVitals();
