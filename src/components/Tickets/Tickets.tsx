import classNames from 'classnames';
import { useState, MouseEvent, useEffect } from 'react';

import MenuButton from '../MenuButton/MenuButton';

import './Tickets.css';

function Tickets() {
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
      className={classNames('tickets', { tickets_opened: isOpened })}
      onClick={handleOverlayClick}
    >
      <div className="tickets__inner">
        <h2>Выбор билетов</h2>
        <h3>Карта Тройка</h3>
        <h3>Единые на число поездок</h3>
        <h3>Единые безлимитные билеты</h3>
        <h3>Билеты для наземного транспорта (ТАТ)</h3>
        <h3>Другие билеты</h3>
        <h3>Сочетания билетов</h3>
      </div>
      <MenuButton onClick={toggleMenuState} />
    </section>
  );
}

export default Tickets;
