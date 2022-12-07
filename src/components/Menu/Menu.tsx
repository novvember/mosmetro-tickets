import classNames from 'classnames';
import { MouseEvent, ReactNode, useEffect, useState } from 'react';
import MenuButton from '../MenuButton/MenuButton';
import MenuButtonForInfo from '../MenuButtonForInfo/MenuButtonForInfo';
import MenuButtonForTickets from '../MenuButtonForTickets/MenuButtonForTickets';
import './Menu.css';

type MenuProps = {
  type: 'tickets' | 'info';
  children: ReactNode;
};

function Menu({ type, children }: MenuProps) {
  const [isOpened, setIsOpened] = useState(false);

  const isStaticOnDesktops = type === 'tickets';

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
      {type === 'tickets' ? (
        <MenuButtonForTickets onClick={toggleMenuState} />
      ) : (
        <MenuButtonForInfo onClick={toggleMenuState} />
      )}

      <div className="menu__inner">{children}</div>
    </section>
  );
}

export default Menu;
