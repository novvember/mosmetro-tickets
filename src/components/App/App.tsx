import React, { useState } from 'react';

import Figure from '../Figure/Figure';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../Text/Text';

import './App.css';

import * as config from '../../utils/config';
import { ticketsData } from '../../utils/ticketsData';
import SimpleTicket from '../../utils/SimpleTicket';
import CompoundTicket from '../../utils/CompoundTicket';

function App() {
  const [tickets, setTickets] = useState(getTickets());

  function getTickets() {
    const tickets: any = {};

    ticketsData
      .filter((ticket) => ticket.isIgnored === false)
      .forEach((ticket) => {
        const ticketId = ticket.id;
        const isCompound = ticket.groupId === 'compound';

        if (!isCompound) {
          tickets[ticketId] = new SimpleTicket(ticket, config);
        } else {
          tickets[ticketId] = new CompoundTicket(ticket, config, tickets);
        }

        tickets[ticketId].fillField();
      });

    return tickets;
  }

  return (
    <div className="content">
      <Header />
      <main>
        <Figure tickets={tickets} />
        <Text />
      </main>
      <Footer />
    </div>
  );
}

export default App;
