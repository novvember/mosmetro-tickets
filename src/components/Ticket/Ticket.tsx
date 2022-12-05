import CompoundCalculatedTicket from '../../utils/CompoundCalculatedTicket';
import SimpleCalculatedTicket from '../../utils/SimpleCalculatedTicket';
import './Ticket.css';

type TicketProps = {
  ticket: SimpleCalculatedTicket | CompoundCalculatedTicket;
};

function Ticket({ ticket }: TicketProps) {
  return (
    <li className="legend-label">
      <label className="legend-label__label">
        <input className="legend-label__checkbox" type="checkbox" />
        <span className="legend-label__title">{ticket.data.name}</span>
      </label>
    </li>
  );
}

export default Ticket;
