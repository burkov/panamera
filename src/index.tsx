import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './components/app';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// reportWebVitals(console.log);
