import { useAppSelector } from '../../store';
import { selectTicketGroupsConfigs } from '../../store/ticketsSlice';
import TicketGroup from '../TicketGroup/TicketGroup';

import './Tickets.css';

function Tickets() {
  const ticketGroupsConfigs = useAppSelector(selectTicketGroupsConfigs);

  return (
    <form className="tickets">
      {ticketGroupsConfigs.map((group) => {
        return <TicketGroup key={group.id} group={group} />;
      })}
    </form>
  );
}

export default Tickets;
