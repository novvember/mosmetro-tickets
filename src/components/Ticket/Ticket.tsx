import './Ticket.css';
import { ChangeEvent } from 'react';
import { useAppDispatch, useAppSelector } from '../../store';
import { selectIsSelected, ticketsSelected } from '../../store/ticketsSlice';
import { CompoundTicketConfig, SimpleTicketConfig } from '../../types/TicketConfig';
import { buildField } from '../../store/globalFieldSlice';

type TicketProps = {
  config: SimpleTicketConfig | CompoundTicketConfig;
};

function Ticket({ config }: TicketProps) {
  const id = config.id;
  const isSelected = useAppSelector((state) => selectIsSelected(state, id));
  const dispatch = useAppDispatch();

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
        <span className="ticket__label">{config.name}</span>
      </label>
    </li>
  );
}

export default Ticket;
