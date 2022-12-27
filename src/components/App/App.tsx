import { useEffect } from 'react';

import { useAppDispatch } from '../../store';
import { ticketsActions } from '../../store/actions';

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

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const tickets = buildTickets(ticketsConfigs);
    const selectedTickets = getInitialSelectedTickets(tickets);
    dispatch(ticketsActions.initializeTickets(tickets, selectedTickets));
  }, [dispatch]);

  return (
    <div className="content">
      <Header />
      <main className="main">
        <Diagram />
        <Menu type="tickets" title="Выбор билетов">
          <Tickets />
        </Menu>
      </main>
      <Menu type="info" title="О Приложении">
        <Info />
      </Menu>
      <Footer />
    </div>
  );
}

export default App;
