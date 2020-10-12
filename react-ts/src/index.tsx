import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {App} from './components/App'
import {reducer} from './reducers'

const store = createStore(reducer, applyMiddleware(thunk))

console.log(reducer)


ReactDOM.render(
    <Provider store={store}>
        <App color='blue' />
    </Provider>,
    document.getElementById('root')
)