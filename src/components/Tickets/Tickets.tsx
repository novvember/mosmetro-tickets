import classNames from 'classnames';
import { useState, MouseEvent, useEffect } from 'react';
import { connect } from 'react-redux';
import TicketGroupConfig from '../../types/TicketGroupConfig';

import MenuButton from '../MenuButton/MenuButton';
import TicketGroup from '../TicketGroup/TicketGroup';

import './Tickets.css';

type TicketsProps = {
  ticketGroupsConfigs: TicketGroupConfig[];
};

function Tickets({ ticketGroupsConfigs }: TicketsProps) {
  const [isOpened, setIsOpened] = useState(false);

  function toggleMenuState() {
    setIsOpened((state) => !state);
  }

  function handleOverlayClick(evt: MouseEvent<HTMLButtonElement>) {
    if (evt.target === evt.currentTarget) toggleMenuState();
  }

  function handleEscClose(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      toggleMenuState();
    }
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });

  return (
    <section
      className={classNames('tickets', { tickets_opened: isOpened })}
      onClick={handleOverlayClick}
    >
      <MenuButton onClick={toggleMenuState} />
      <div className="tickets__inner">
        <h2 className='tickets__title'>Выбор билетов</h2>

        <form className="tickets__form">
          {ticketGroupsConfigs.map((group) => {
            return <TicketGroup key={group.id} group={group} />;
          })}
        </form>
      </div>
    </section>
  );
}

function mapStateToProps({ ticketGroupsConfigs }: any) {
  return {
    ticketGroupsConfigs,
  };
}

export default connect(mapStateToProps)(Tickets);
