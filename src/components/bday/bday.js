import React from 'react';
import './bday.scss';
import users from './users.json';
import { connect } from 'redux-bundler-react';
const location = 'Минск, Садоводческое товарищество Олимпиец-88, 21';
const yandexRoute = 'https://yandex.by/maps/157/minsk/?from=api-maps&ll=27.715372%2C53.829612&mode=routes&origin=jsapi_2_1_74&pt=27.732079%2C53.799063&rtext=53.861968%2C27.674147~53.797346%2C27.737069&rtt=mt&ruri=ymapsbm1%3A%2F%2Fgeo%3Fll%3D27.674%252C53.862%26spn%3D0.001%252C0.001%26text%3D%25D0%2591%25D0%25B5%25D0%25BB%25D0%25B0%25D1%2580%25D1%2583%25D1%2581%25D1%258C%252C%2520%25D0%259C%25D1%2596%25D0%25BD%25D1%2581%25D0%25BA%252C%2520%25D0%2590%25D1%259E%25D1%2582%25D0%25B0%25D0%25B7%25D0%25B0%25D0%25B2%25D0%25BE%25D0%25B4%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F%2520%25D0%25BB%25D1%2596%25D0%25BD%25D1%2596%25D1%258F%252C%2520%25D0%25BC%25D0%25B5%25D1%2582%25D1%2580%25D0%25BE%2520%25D0%259C%25D0%25B0%25D0%25B3%25D1%2596%25D0%25BB%25D1%2591%25D1%259E%25D1%2581%25D0%25BA%25D0%25B0%25D1%258F~&z=12';
const date = '14.09.2019';
const getThere = ['На общ. транспорте - от ст. м. Могилевская ~15 минут', 'Такси из центра ~15р.', 'На машине ~10 минут от ст. м. Могилевская'];
const BDay = ({ doUpdateUrl }) => {
  const userId = new URLSearchParams(window.location.search).get('user');
  const message = users[userId];

  if (!message) {
    doUpdateUrl('/');
  }

  return (
    <div className="bday-container">
      <h1>Привет! Я приглашаю тебя на день рождения!</h1>

      <span className="cake" role="img" aria-label="cake">
        🎂
      </span>

      <div className="tab personal-message">
        <h2>Персональное сообщение:</h2>
        <p>{message}</p>
        <p>
          Твоя ссылка что бы не потерять ничего:{' '}
          <a href={window.location.href}>{window.location.href}</a>
        </p>
      </div>

      <div className="info">
        <h2>Информация</h2>
        <div className="tab">
          <h4>Когда?</h4>
          <span>{date}</span>
        </div>
        <div className="tab">
          <h4>Где?</h4>
          <span>{location}</span>
        </div>
        <div className="tab get-there">
          <h4>Как добраться?</h4>
          {
            getThere.map((el) => <span key={el}>{el}</span>)
          }
          <br />
          <a href={yandexRoute}>
            Я.Карты
          </a>
        </div>
        <div className="tab">
          <h4>Расписание:</h4>
          <div className="time-block">
          <span className="title">15:30-16:00 - Собираемся</span>
          <span className="description">
            Я оч прошу не опаздывать, дабы избежать вашего отсуствия в ключевые моменты и рассинхрона с остальными ребятами, ведь программа насыщенная. 
          </span>
          </div>

          <div className="time-block">
          <span className="title">16:00-18:00 - Развлекательная программа</span>
          <span className="description">
            Как правило все собираются и тупо бухают, поэтому я решил внести разнообразие и поработать тамадой (поиздеваться над гостями)
          </span>
          </div>

          <div className="time-block">
          <span className="title">18:00-21:00 - Баня, шашлык</span>
          <span className="description">
            Надеюсь, будет ещё тепло чтобы замутить пул пати с баней и шашлыком, если нет, то этот блок поменяется с верхним. В принципе, начиная с 18:00 начинается стандартное бухалово.
          </span>
          </div>

          <div className="time-block">
          <span className="title">21:00-23:00 - Подарки, пьяные игры, бильярд</span>
          <span className="description">
            Меня бесит эта херня с подарками, когда тебя пытаются выловить в начале тусы и все вместе смущаются и тд. Во-первых я вам буду рад без подарка, просто, сука приедте вовремя. Во-вторых, если уж решили что-то дарить то для этого специально выделен час (21:00-22:00), когда мы уже будем в правильном настроении, все централизованно отстреляемся от этого позора и пойдём дальше пить. 
          </span>
          </div>
          
          <div className="time-block">
          <span className="title">23:00-??:?? - Загружаемся в дом, танцуем, пьём.</span>
          <span className="description">
            После 11 нельзя шуметь на улице, поэтому будем шуметь и пить в доме. Ира тверкает, я дерусь с Гришей, Олег засыпает, в общем, всё по стандартной программе. 
          </span>
          </div>
          <span className="ps">
            Скорее всего всё пойдёт не по этому плану, но похуй.
          </span>
        </div>
        <div className="tab">
          <h4>Отказы не принимаются</h4>
          <a href="https://t.me/joinchat/Ex3DMhEXgqQMer1b-tFsrQ">telegram чат участников</a>
        </div>
        <div className="tab">
          <h4>Подарки принимаются (но не обязательнo)</h4>
          <a href="https://docs.google.com/spreadsheets/d/1km80VUQVJ9SfRDj2lC2ey0tqhiGUKyZmtY25K3Y_Z2w/edit?usp=sharingnpm s">
            Если ловишь затуп и не знаешь что дарить
          </a>
        </div>
      </div>
    </div>
  );
};
export default connect(
  'selectRoute',
  'selectPathname',
  'doUpdateUrl',
  BDay
);
