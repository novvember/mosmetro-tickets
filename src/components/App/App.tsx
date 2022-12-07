import { useEffect } from 'react';
import { connect } from 'react-redux';

import { initialized } from '../../store/actions';
import buildTickets from '../../utils/buildTickets';
import getInitialSelectedTickets from '../../utils/getInitialSelectedTickets';
import { ticketsConfigs } from '../../utils/ticketsData';
import Diagram from '../Diagram/Diagram';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Tickets from '../Tickets/Tickets';
import Info from '../Info/Info';

import './App.css';

function App({ initialized }: { initialized: any }) {
  useEffect(() => {
    const tickets = buildTickets(ticketsConfigs);
    const selectedTickets = getInitialSelectedTickets(tickets);
    initialized(tickets, selectedTickets);
  }, [initialized]);

  return (
    <div className="content">
      <Header />
      <main className="main">
        <Diagram />
        <Menu type="tickets">
          <Tickets />
        </Menu>
      </main>
      <Menu type="info">
        <Info />
      </Menu>
      <Footer />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  initialized,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
