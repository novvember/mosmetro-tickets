import './MenuButton.css';

import ReactDOM from 'react-dom';
import { MouseEvent } from 'react';

type MenuButtonProps = {
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
};

function MenuButton({ onClick }: MenuButtonProps) {
  return ReactDOM.createPortal(
    <button className="menu-button" onClick={onClick}>
      🎟️
    </button>,
    document.body,
  );
}

export default MenuButton;
