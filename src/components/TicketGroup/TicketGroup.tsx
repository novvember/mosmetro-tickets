import classNames from 'classnames';

import TicketGroupConfig from '../../types/TicketGroupConfig';
import Ticket from '../Ticket/Ticket';

import './TicketGroup.css';
import './group-icon.css';
import { useAppSelector } from '../../store';
import { ticketsSelector } from '../../store/selectors';

type TicketGroupProps = {
  group: TicketGroupConfig;
};

function TicketGroup({ group }: TicketGroupProps) {
  const tickets = useAppSelector(ticketsSelector);

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

export default TicketGroup;
