import './Info.css';

function Info() {
  return (
    <section className="info">
      <h3>Что это?</h3>
      <p>
        Приложение, в котором можно посмотреть на все выгодные билеты для
        проезда в общественном транспорте Москвы на одном большом двухмерном
        графике.
      </p>

      <h3>Что это дает?</h3>
      <p>
        Во-первых, можно подобрать себе самый выгодный билет. Найдите на графике
        точку, соответствующую вашему количеству ежемесячных поездок, —
        получите, сколько это будет стоить, и сам билет.
      </p>
      <p>
        Во-вторых, по-моему, здорово, что можно посмотреть на график и сразу
        оценить все варианты: например, какие билеты выгодны и на какие профили
        поездок рассчитаны, а какие билеты стоят слишком много и почти никогда
        не становятся выгодными.
      </p>

      <h3>Как пользоваться?</h3>
      <p>
        По горизонтальной оси нужно выбрать количество поездок на метро
        в течение месяца, а по вертикальной — количество поездок на наземном
        транспорте. На пересечении будет информация об оптимальном билете
        и стоимости. Стоимость указывается в пересчете на месяц (30 дней).
      </p>
      <p>
        Справа можно отключить ненужные билеты (например, не все готовы покупать
        выгодный годовой проездной) — график пересчитается автоматически.
      </p>

      <h3>Данные актуальны?</h3>
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
        Со 2 января 2023 года{' '}
        <a href="https://telegra.ph/file/b9658edd8ebfb03c89823.jpg">
          будет новое повышение цен
        </a>
        , ближе к этому времени данные в приложении будут обновлены.
      </p>
      <p>
        Актуальную информацию о видах билетов, их стоимости и условиях можно
        посмотреть{' '}
        <a href="https://transport.mos.ru/mostrans/oplata_proezda/">
          на официальном сайте.
        </a>
      </p>

      <h3>Как это работает?</h3>
      <p>
        Так как все билеты отличаются по количеству включенных дней или сроку
        действия, то все они для удобства сравнения пересчитываются на месяц
        (30 дней). Итоговая стоимость тоже указывается как средняя стоимость
        проезда в месяц.
      </p>
      <p>
        Для каждого случая (столько-то поездок на метро и столько-то на наземном
        транспорте) приложение прямо внутри браузера считает стоимость всех
        билетов и показывает оптимальный вариант.
      </p>

      <h3>Что не учитывается?</h3>
      <p>
        Из существующих билетов не считаются только льготные (школьные)
        и некоторые случаи совместного использования билетов (наиболее
        актуальные сочетания все-таки учтены). Также не считается всё, что
        действует за пределами МКАД (то есть вне «Центральной» зоны): МЦД в зоне
        «Пригород», автобусы в зоне Б.
      </p>
      <p>
        Еще никак не считаются пересадки. Сейчас на графике все поездки
        независимы, например 2 поездки на автобусе — это 2 поездки в разное
        время (а не поездка с пересадкой в рамках тарифа „90 минут“, как могла
        бы быть).
      </p>

      <h3>Нашли ошибку?</h3>
      <p>
        Если что-то не так вообще или не так считается, напишите мне об этом или
        создайте пул-реквест, если знаете как. Ссылки под графиком.
      </p>

      <p className="info__special">🚃</p>
    </section>
  );
}

export default Info;
