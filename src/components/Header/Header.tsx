import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Проездные билеты Москвы</h1>
      <p className="header__subtitle">
        Сколько они стоят при регулярном использовании и какой лучше купить?
        Выберите, сколько поездок на метро, а сколько на наземном транспорте
        совершаете в течение месяца.
      </p>
    </header>
  );
}

export default Header;
