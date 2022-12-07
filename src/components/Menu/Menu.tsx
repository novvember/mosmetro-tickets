import classNames from 'classnames';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import './Menu.css';

type MenuProps = {
  isStaticOnDesktops?: boolean;
  children: ReactNode;
};

function Menu({ isStaticOnDesktops = false, children }: MenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  function toggleMenuState() {
    setIsOpened((state) => !state);
  }

  function handleOverlayClick(evt: MouseEvent<HTMLButtonElement>) {
    if (evt.target === evt.currentTarget) toggleMenuState();
  }

  function handleEscClose(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      toggleMenuState();
    }
  }

  useEffect(() => {
    if (isOpened) {
      document.addEventListener('keydown', handleEscClose);
    }

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    };
  });

  return (
    <section
      className={classNames(
        'menu',
        { menu_opened: isOpened },
        { 'menu_static-on-desktops': isStaticOnDesktops },
      )}
      onClick={handleOverlayClick}
    >
      <MenuButton onClick={toggleMenuState} />
      <div className="menu__inner">{children}</div>
    </section>
  );
}

export default Menu;
