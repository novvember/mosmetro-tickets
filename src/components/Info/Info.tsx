import './Info.css';

function Info() {
  return (
    <section className="info">
      <h2>Данные актуальны?</h2>
      <p>
        Актуальны на 2022 год: учтено последнее изменение стоимости проезда
        в Москве —{' '}
        <a href="https://transport.mos.ru/mostrans/all_news/108721">
          со 2 января 2022 года
        </a>
        .
      </p>
      <p>
        Кроме того, до 30 июня 2022 года действует{' '}
        <a href="https://www.mos.ru/news/item/103164073/">
          акция по карте „Мир“
        </a>
        : при оплате смартфоном в метро, МЦК, МЦД и наземном транспорте скидка
        10 ₽.
      </p>
      <p>
        Из существующих билетов не считаются только льготные (школьные)
        и некоторые случаи совместного исползования билетов (наиболее актуальные
        сочетания все-таки учтены). Также не считается всё, что действует
        за пределами МКАД (то есть вне «Центральной» зоны): МЦД в зоне
        «Пригород», автобусы в зоне Б.
      </p>
    </section>
  );
}

export default Info;