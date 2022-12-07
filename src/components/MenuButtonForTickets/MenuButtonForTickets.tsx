import { MouseEvent } from 'react';
import MenuButton from '../MenuButton/MenuButton';

type MenuButtonForTicketsProps = {
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
};

function MenuButtonForTickets({ onClick }: MenuButtonForTicketsProps) {
  return (
    <MenuButton
      onClick={onClick}
      className="menu-button_type_tickets"
      title="Открыть меню выбора билетов"
    />
  );
}

export default MenuButtonForTickets;
