import { useEffect } from 'react';
import { connect } from 'react-redux';

import { initialized } from '../../store/actions';
import buildTickets from '../../utils/buildTickets';
import getInitialSelectedTickets from '../../utils/getInitialSelectedTickets';
import { ticketsConfigs } from '../../utils/ticketsData';
import Diagram from '../Diagram/Diagram';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Tickets from '../Tickets/Tickets';
// import Text from '../Text/Text';

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
        <Tickets />
        {/* <Text /> */}
      </main>
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
