import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Визуализатор проездных билетов Москвы</h1>
      <p className="header__subtitle">
        Какой билет выбрать для регулярного использования? И сколько это будет
стоить? Выберите на графике, сколько поездок на метро, а сколько
на наземном транспорте совершаете в течение месяца.
      </p>
    </header>
  );
}

export default Header;
