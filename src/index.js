import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// redux stuff
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { featureReducer } from './reducers/featureReducer';

import 'bulma/css/bulma.css';
import './styles.scss';

const store = createStore(featureReducer);
console.log('store from index.js', store);

const rootElement = document.getElementById('root');
ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, rootElement);
