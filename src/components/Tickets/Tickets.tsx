import { connect } from 'react-redux';
import TicketGroupConfig from '../../types/TicketGroupConfig';
import Menu from '../Menu/Menu';
import TicketGroup from '../TicketGroup/TicketGroup';

import './Tickets.css';

type TicketsProps = {
  ticketGroupsConfigs: TicketGroupConfig[];
};

function Tickets({ ticketGroupsConfigs }: TicketsProps) {
  return (
    <Menu isStaticOnDesktops>
      <div className="tickets">
        <h2 className="tickets__title">Выбор билетов</h2>

        <form className="tickets__form">
          {ticketGroupsConfigs.map((group) => {
            return <TicketGroup key={group.id} group={group} />;
          })}
        </form>
      </div>
    </Menu>

    // <section
    //   className={classNames('tickets', { tickets_opened: isOpened })}
    //   onClick={handleOverlayClick}
    // >
    //   <MenuButton onClick={toggleMenuState} />
    //   <div className="tickets__inner">
    //     <h2 className='tickets__title'>Выбор билетов</h2>

    //     <form className="tickets__form">
    //       {ticketGroupsConfigs.map((group) => {
    //         return <TicketGroup key={group.id} group={group} />;
    //       })}
    //     </form>
    //   </div>
    // </section>
  );
}

function mapStateToProps({ ticketGroupsConfigs }: any) {
  return {
    ticketGroupsConfigs,
  };
}

export default connect(mapStateToProps)(Tickets);
