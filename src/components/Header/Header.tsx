import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav id="menu-buttons" className='header__menu'></nav>
      <h1 className="header__title">Визуализатор проездных билетов Москвы<sup className='header__version'>3.2</sup></h1>
      <p className="header__subtitle">
        Какой билет выбрать для регулярного использования? И сколько это будет
стоить? Выберите на графике, сколько поездок на метро, а сколько
на наземном транспорте совершаете в течение месяца.
      </p>
    </header>
  );
}

export default Header;
