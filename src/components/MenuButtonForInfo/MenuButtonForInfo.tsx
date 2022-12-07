import { MouseEvent } from 'react';
import MenuButton from '../MenuButton/MenuButton';

type MenuButtonForInfoProps = {
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
};

function MenuButtonForInfo({ onClick }: MenuButtonForInfoProps) {
  return (
    <MenuButton
      onClick={onClick}
      className="menu-button_type_info"
      title="Открыть информацию о приложении"
    />
  );
}

export default MenuButtonForInfo;
