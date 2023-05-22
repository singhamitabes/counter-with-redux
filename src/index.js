import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Counter from './Component/Counter';
import { Provider } from 'react-redux';
import store from './Store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Provider store={store}>
      <Counter />
    </Provider>
  </>
)

reportWebVitals();
