import { connect } from 'react-redux';
import SelectedTickets from '../../types/SelectedTickets';
import CompoundTicket from '../../utils/CompoundTicket';
import SimpleTicket from '../../utils/SimpleTicket';
import './Ticket.css';
import { selected } from '../../store/actions';
import { ChangeEvent } from 'react';

type TicketProps = {
  ticket: SimpleTicket | CompoundTicket;
  selectedTickets: SelectedTickets;
  selected: any;
};

function Ticket({ ticket, selectedTickets, selected }: TicketProps) {
  const id = ticket.config.id;
  const isSelected = selectedTickets[id];

  function handleChange(evt: ChangeEvent<HTMLInputElement>) {
    selected(id, !isSelected);
  }

  return (
    <li className="legend-label">
      <label className="legend-label__label">
        <input
          className="legend-label__checkbox"
          type="checkbox"
          checked={isSelected}
          onChange={handleChange}
        />
        <span className="legend-label__title">{ticket.config.name}</span>
      </label>
    </li>
  );
}

function mapStateToProps({ selectedTickets }: any) {
  return {
    selectedTickets,
  };
}

const mapDispatchToProps = {
  selected,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ticket);
