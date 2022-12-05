import CompoundTicket from '../../utils/CompoundTicket';
import SimpleTicket from '../../utils/SimpleTicket';
import './Ticket.css';

type TicketProps = {
  ticket: SimpleTicket | CompoundTicket;
};

function Ticket({ ticket }: TicketProps) {
  return (
    <li className="legend-label">
      <label className="legend-label__label">
        <input className="legend-label__checkbox" type="checkbox" />
        <span className="legend-label__title">{ticket.config.name}</span>
      </label>
    </li>
  );
}

export default Ticket;
