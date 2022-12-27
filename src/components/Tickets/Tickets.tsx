import { useAppSelector } from '../../store';
import { ticketGroupsConfigsSelector } from '../../store/selectors';
import TicketGroup from '../TicketGroup/TicketGroup';

import './Tickets.css';

function Tickets() {
  const ticketGroupsConfigs = useAppSelector(ticketGroupsConfigsSelector);

  return (
    <form className="tickets">
      {ticketGroupsConfigs.map((group) => {
        return <TicketGroup key={group.id} group={group} />;
      })}
    </form>
  );
}

export default Tickets;
