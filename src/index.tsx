import React from 'react';
import ReactDOM from 'react-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'reset-css';
import './styles/restore.css';
import '@webteam/colors/lib/index.css';
import { App } from './components/app';
import { HashRouter } from 'react-router-dom';

dayjs.extend(relativeTime);

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals(console.log);
