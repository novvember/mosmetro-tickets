import { connect } from 'react-redux';
import classNames from 'classnames';

import Tickets from '../../types/Tickets';
import TicketGroupConfig from '../../types/TicketGroupConfig';
import Ticket from '../Ticket/Ticket';
import State from '../../types/State';

import './TicketGroup.css';
import './group-icon.css';

type TicketGroupProps = {
  group: TicketGroupConfig;
  tickets: Tickets | null;
};

function TicketGroup({ group, tickets }: TicketGroupProps) {
  const ticketsByGroup = tickets
    ? Object.values(tickets).filter(
        (ticket) => ticket.config.groupId === group.id,
      )
    : null;

  return (
    <fieldset className="ticket-group">
      <h3
        className={classNames(
          'ticket-group__title',
          'group-icon',
          `group-icon_id_${group.id}`,
        )}
      >
        {group.title}
      </h3>
      <ul className="ticket-group__list">
        {ticketsByGroup &&
          ticketsByGroup.map((ticket) => {
            return <Ticket key={ticket.config.id} ticket={ticket} />;
          })}
      </ul>
    </fieldset>
  );
}

function mapStateToProps({ tickets }: State) {
  return {
    tickets,
  };
}

export default connect(mapStateToProps)(TicketGroup);
