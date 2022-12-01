import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Проездные билеты Москвы 🎟️</h1>
      <p className="header__subtitle">
        Их стоимость и расчет оптимального при регулярном использовании.
        Выберите, сколько поездок на метро и наземном транспорте совершаете
        в течение месяца. (Данные на 2022 год.)
      </p>
    </header>
  );
}

export default Header;
