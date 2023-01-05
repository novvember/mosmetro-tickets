import { useEffect } from 'react';

import { useAppDispatch } from '../../store';

import Diagram from '../Diagram/Diagram';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Menu from '../Menu/Menu';
import Tickets from '../Tickets/Tickets';
import Info from '../Info/Info';

import './App.css';
import { buildField, initializeTickets } from '../../store/slices/ticketsSlice';

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    async function initialize() {
      await dispatch(initializeTickets());
      await dispatch(buildField());
    }

    initialize();
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
