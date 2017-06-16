import React from 'react';
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './containers/App';
// import reducer from './reducers'

// const store = createStore(reducer);
// <Provider store={store}> </Provider>

document.addEventListener('DOMContentLoaded', () => {
    render(
        <App />,
        document.getElementById('root')
    );
});