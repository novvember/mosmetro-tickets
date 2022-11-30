import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">
        Проездные билеты Московского транспорта
      </h1>
      <p className="header__subtitle">
        Визуальный калькулятор стоимости проезда на общественном транспорте
Москвы в зависимости от вида транспорта и частоты поездок
      </p>
    </header>
  );
}

export default Header;
