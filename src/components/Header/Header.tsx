import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Калькулятор стоимости проезда на общественном транспорте Москвы
      </h1>
      <p className="header__subtitle">
        Все основные билеты на метро, автобус и трамвай
на интерактивном графике. Какой билет покупать — просто
Тройку, или Единый, или ТАТ? Это зависит от вида транспорта
и частоты поездок.
      </p>
    </header>
  );
}

export default Header;
