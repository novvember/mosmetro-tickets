import { ticketsDate } from '../../data/ticketsData';
import './Footer.css';

function Footer() {
  const date = ticketsDate.toLocaleDateString('ru', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  return (
    <footer className="footer">
      <p className="footer__text">
        Стоимость билетов по состоянию на {date}
        {} / Не имеет отношения к «Московскому транспорту» /{' '}
        <a href="https://github.com/novvember/mosmetro-tickets">
          Репозиторий на Github
        </a>{' '}
        / © 2019–2026 <a href="https://github.com/novvember">novvember</a>
      </p>
    </footer>
  );
}

export default Footer;
