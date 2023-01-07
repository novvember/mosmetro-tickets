import classNames from 'classnames';

import TicketGroupConfig from '../../types/TicketGroupConfig';
import Ticket from '../Ticket/Ticket';

import './TicketGroup.css';
import './group-icon.css';
import { useAppSelector } from '../../store';
import { selectTicketGroupById, selectTicketsIdsByGroupId } from '../../store/ticketsSlice';

type TicketGroupProps = {
  groupId: TicketGroupConfig['id'];
};

function TicketGroup({ groupId }: TicketGroupProps) {
  const group = useAppSelector((state) => selectTicketGroupById(state, groupId));
  const ticketsIds = useAppSelector((state) => selectTicketsIdsByGroupId(state, groupId));

  if (!group) return null;

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
        {
          ticketsIds.map((id) => {
            return <Ticket key={id} id={id} />;
          })}
      </ul>
    </fieldset>
  );
}

export default TicketGroup;
