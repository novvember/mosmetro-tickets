import { connect } from 'react-redux';
import Tickets from '../../types/Tickets';
import TicketGroupConfig from '../../types/TicketGroupConfig';
import Ticket from '../Ticket/Ticket';
import './TicketGroup.css';
import State from '../../types/State';

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
      <h3 className="ticket-group__title">{group.title}</h3>
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
