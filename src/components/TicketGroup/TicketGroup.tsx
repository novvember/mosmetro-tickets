import classNames from 'classnames';

import TicketGroupConfig from '../../types/TicketGroupConfig';
import Ticket from '../Ticket/Ticket';

import './TicketGroup.css';
import './group-icon.css';
import { useAppSelector } from '../../store';
import { selectTicketsConfigs } from '../../store/ticketsSlice';

type TicketGroupProps = {
  group: TicketGroupConfig;
};

function TicketGroup({ group }: TicketGroupProps) {
  const ticketsConfigs = useAppSelector(selectTicketsConfigs);

  const ticketsByGroup = ticketsConfigs
    ? Object.values(ticketsConfigs).filter(
      (config) => config.groupId === group.id,
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
          ticketsByGroup.map((config) => {
            return <Ticket key={config.id} config={config} />;
          })}
      </ul>
    </fieldset>
  );
}

export default TicketGroup;
