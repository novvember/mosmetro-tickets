import { connect } from 'react-redux';
import CalculatedTickets from '../../types/CalculatedTickets';
import TicketGroupType from '../../types/TicketGroup';
import Ticket from '../Ticket/Ticket';
import './TicketGroup.css';

type TicketGroupProps = {
  group: TicketGroupType;
  tickets: CalculatedTickets;
};

function TicketGroup({ group, tickets }: TicketGroupProps) {
  const ticketsByGroup = tickets
    ? Object.values(tickets).filter(
        (ticket) => ticket.data.groupId === group.id,
      )
    : null;

  return (
    <fieldset className="legend-group">
      <h2 className="legend-group__title">{group.title}</h2>
      <ul className="legend-group__ticket-list">
        {ticketsByGroup &&
          ticketsByGroup.map((ticket) => {
            return <Ticket key={ticket.data.id} ticket={ticket} />;
          })}
      </ul>
    </fieldset>
  );
}

function mapStateToProps({ tickets }: any) {
  return {
    tickets,
  };
}

export default connect(mapStateToProps)(TicketGroup);
