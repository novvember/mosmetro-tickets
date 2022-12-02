import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Проездные билеты Москвы 🎟️</h1>
      <p className="header__subtitle">
        Оптимальные траты на них при регулярном использовании.
Выберите, сколько поездок на метро и наземном транспорте совершаете
в течение месяца.
      </p>
      <p className="header__subtitle">
        Сейчас данные на 2022 год. Сайт в разработке — дальше будет лучше.
      </p>
    </header>
  );
}

export default Header;
