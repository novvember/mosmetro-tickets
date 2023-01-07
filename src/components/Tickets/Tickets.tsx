import { useAppSelector } from '../../store';
import { selectTicketGroupsIds } from '../../store/ticketsSlice';
import TicketGroup from '../TicketGroup/TicketGroup';

import './Tickets.css';

function Tickets() {
  const ticketGroupsIds = useAppSelector(selectTicketGroupsIds) as string[];

  return (
    <form className="tickets">
      {ticketGroupsIds.map((groupId) => {
        return <TicketGroup key={groupId} groupId={groupId} />;
      })}
    </form>
  );
}

export default Tickets;
