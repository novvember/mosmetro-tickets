import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './components/App/App';
import buildTickets from './utils/buildTickets';
import { ticketsData } from './utils/ticketsData';
import Field from './utils/Field';
import config from './utils/config';

const tickets = buildTickets(ticketsData);
const field = new Field(tickets, config);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
