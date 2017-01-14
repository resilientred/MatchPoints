import 'babel-polyfill';
import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { ReduxAsyncConnect } from 'redux-async-connect';
import store from './redux/store';
import getRoutes from './routes';

if (process.env.NODE_ENV !== 'production') {
  window.React = React;
}

document.addEventListener('DOMContentLoaded', () => {
  injectTapEventPlugin();
  if (process.env.DEVTOOLS && !window.devToolsExtension) {
    const DevTools = require('./components/DevTools');
    render(<Provider store={store}>
      <div>
        <Router
          history={browserHistory}
          render={props => <ReduxAsyncConnect {...props} />}
        >
          {getRoutes(store)}
        </Router>
        <DevTools />
      </div>
    </Provider>, document.getElementById('root'));
  } else {
    render(<Provider store={store}>
      <Router
        history={browserHistory}
        render={props => <ReduxAsyncConnect {...props} />}
      >
        {getRoutes(store)}
      </Router>
    </Provider>, document.getElementById('root'));
  }
});
