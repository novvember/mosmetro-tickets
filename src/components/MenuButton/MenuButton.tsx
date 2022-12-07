import './MenuButton.css';

import ReactDOM from 'react-dom';
import { MouseEvent } from 'react';
import classNames from 'classnames';

type MenuButtonProps = {
  onClick: (evt: MouseEvent<HTMLButtonElement>) => void;
  className: string;
  title: string;
};

function MenuButton({ onClick, className, title }: MenuButtonProps) {
  return ReactDOM.createPortal(
    <button
      className={classNames('menu-button', className)}
      onClick={onClick}
      aria-label={title}
    ></button>,
    document.getElementById('menu-buttons')!,
  );
}

export default MenuButton;
