import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App/App';
import buildTickets from './utils/buildTickets';
import { ticketsData } from './utils/ticketsData';

const tickets = buildTickets(ticketsData);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
