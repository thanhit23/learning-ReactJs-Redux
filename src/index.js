import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import rootReducers from "./reducers";
import { createStore } from "redux";
import { Provider } from "react-redux";
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={ store }>
      <React.StrictMode>
          <App />
      </React.StrictMode>
  </Provider>
);

reportWebVitals();
