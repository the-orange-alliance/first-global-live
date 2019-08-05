import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './src/App';
import * as AxiosHooks from "axios-hooks";

(AxiosHooks as any).loadCache((window as any).__AXIOS_HOOKS_CACHE__);
delete (window as any).__AXIOS_HOOKS_CACHE__;

ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('app')
);