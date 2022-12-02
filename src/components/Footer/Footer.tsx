import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        Сайт еще в разработке — дальше будет лучше. Сайт не имеет отношения
        к «Московскому транспорту» //{' '}
        <a href="https://github.com/novvember/mosmetro-tickets">
          Репозиторий на Github
        </a>{' '}
        d // © 2019–2022 <a href="https://github.com/novvember">novvember</a>
      </p>
    </footer>
  );
}

export default Footer;
