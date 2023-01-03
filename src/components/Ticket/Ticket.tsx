import './Ticket.css';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { isSelectedSelector } from '../../store/selectors';
import { calculationStarted, ticketsSelected } from '../../store/slices/ticketsSlice';
import { CompoundTicketConfig, SimpleTicketConfig } from '../../types/TicketConfig';

type TicketProps = {
  config: SimpleTicketConfig | CompoundTicketConfig;
};

function Ticket({ config }: TicketProps) {
  const id = config.id;
  const isSelected = useAppSelector(isSelectedSelector(id));
  const dispatch = useAppDispatch();

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    dispatch(calculationStarted({}));
    dispatch(ticketsSelected({ id, isSelected: !isSelected }));
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
        <span className="ticket__label">{config.name}</span>
      </label>
    </li>
  );
}

export default Ticket;
