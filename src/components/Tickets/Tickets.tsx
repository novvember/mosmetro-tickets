import { connect } from 'react-redux';
import TicketGroupConfig from '../../types/TicketGroupConfig';
import TicketGroup from '../TicketGroup/TicketGroup';

import './Tickets.css';

type TicketsProps = {
  ticketGroupsConfigs: TicketGroupConfig[];
};

function Tickets({ ticketGroupsConfigs }: TicketsProps) {
  return (
    <form className="tickets">
      {ticketGroupsConfigs.map((group) => {
        return <TicketGroup key={group.id} group={group} />;
      })}
    </form>
  );
}

function mapStateToProps({ ticketGroupsConfigs }: any) {
  return {
    ticketGroupsConfigs,
  };
}

export default connect(mapStateToProps)(Tickets);
