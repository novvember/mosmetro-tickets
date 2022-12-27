import CompoundTicket from '../../utils/CompoundTicket';
import SimpleTicket from '../../utils/SimpleTicket';
import './Ticket.css';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { ticketsActions } from '../../store/actions';
import { isSelectedSelector } from '../../store/selectors';

type TicketProps = {
  ticket: SimpleTicket | CompoundTicket;
};

function Ticket({ ticket }: TicketProps) {
  const id = ticket.config.id;
  const isSelected = useAppSelector(isSelectedSelector(id));
  const dispatch = useAppDispatch();

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    dispatch(ticketsActions.selectTickets(id, !isSelected));
  }

  return (
    <li className="ticket">
      <label className="ticket__input-item">
        <input
          className="ticket__input"
          type="checkbox"
          checked={isSelected}
          onChange={handleChange}
        />
        <span className="ticket__label">{ticket.config.name}</span>
      </label>
    </li>
  );
}

export default Ticket;
