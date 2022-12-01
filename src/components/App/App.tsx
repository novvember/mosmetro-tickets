import { useEffect } from 'react';
import { connect } from 'react-redux';
import { calculated } from '../../store/actions';
import buildTickets from '../../utils/buildTickets';
import config from '../../utils/config';
import Field from '../../utils/Field';
import { ticketsData } from '../../utils/ticketsData';

import Figure from '../Figure/Figure';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Text from '../Text/Text';

import './App.css';

function App({ calculated }: { calculated: any }) {
  useEffect(() => {
    const tickets = buildTickets(ticketsData);
    const field = new Field(tickets, config);
    field.calculate();
    calculated(field.field, field.minCost, field.maxCost);
  }, [calculated]);

  return (
    <div className="content">
      <Header />
      <main>
        <Figure />
        <Text />
      </main>
      <Footer />
    </div>
  );
}

function mapStateToProps() {
  return {};
}

const mapDispatchToProps = {
  calculated,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
