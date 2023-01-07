import './Ticket.css';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectConfigByTicketId, selectIsSelected, ticketsSelected } from '../../store/ticketsSlice';
import { buildField } from '../../store/globalFieldSlice';
import TicketId from '../../types/TicketId';

type TicketProps = {
  id: TicketId;
};

function Ticket({ id }: TicketProps) {
  const isSelected = useAppSelector((state) => selectIsSelected(state, id)) ?? false;
  const config = useAppSelector((state) => selectConfigByTicketId(state, id));
  const dispatch = useAppDispatch();
  const name = config?.name ?? '';

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    dispatch(ticketsSelected({ id, isSelected: !isSelected }));
    dispatch(buildField());
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
        <span className="ticket__label">{name}</span>
      </label>
    </li>
  );
}

export default Ticket;
