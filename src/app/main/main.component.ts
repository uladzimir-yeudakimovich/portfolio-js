import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  images = [
    [
      'Messenger.',
      '',
      '',
      `Full-stack development. Used technologies HTML5, CSS3, JavaScript, Node.JS, WebSockets, MySQL.
        It was used the express framework during the development of the server part. Communication in the
        MESSAGE is in the browser. Data is transferred to the server via WebSocket. The server is
        processed and written to the MySQL database.`,
      'src/app/images/chat/chat_laptop1.jpg',
      'src/app/images/chat/chat_laptop2.jpg',
      'src/app/images/chat/chat_laptop3.jpg',
      'src/app/images/chat/chat_laptop4.jpg',
      'src/app/images/chat/chat_laptop5.jpg'
    ],
    [
      'The Alina game',
      'http://uladzimir-yeudakimovich.ml/phaser-game/',
      'play',
      `This game is "arcade". The development language is JavaScript. It was written using the Phaser framework, the
        presentation was performed using the Bootstrap framework and connecting the jQuery library.`,
      'src/app/images/game/game_laptop1.jpg',
      'src/app/images/game/game_laptop2.jpg',
      'src/app/images/game/game_laptop3.jpg',
      'src/app/images/game/game_laptop4.jpg',
      'src/app/images/game/game_laptop5.jpg'
    ],
    [
      'Social-network.',
      'http://uladzimir-yeudakimovich.ml/social-network/',
      'view site',
      `It was written in HTML5, CSS3 and JavaScript. I used vector graphics svg for drawing icons
        and Yandex maps API for adding a map to the page.`,
      'src/app/images/social/social_laptop1.jpg',
      'src/app/images/social/social_laptop2.jpg',
      'src/app/images/social/social_laptop3.jpg',
      'src/app/images/social/social_laptop4.jpg',
      'src/app/images/social/social_laptop5.jpg'
    ],
    [
      'Application.',
      'http://uladzimir-yeudakimovich.mlreact-app/',
      'view application',
      `Task Scheduler To-DO-List. The development language is JavaScript. It was written with the use of the React
        framework, with the connection of the Redux library.`,
      'src/app/images/react/app_laptop1.jpg',
      'src/app/images/react/app_laptop2.jpg',
      'src/app/images/react/app_laptop3.jpg',
      'src/app/images/react/app_laptop4.jpg',
      'src/app/images/react/app_laptop5.jpg'
    ],
    [
      'Math-match-game.',
      'http://uladzimir-yeudakimovich.ml/match-match-game/',
      'play',
      `Game for the development of memory. It was written in HTML5, CSS3 and JavaScript.`,
      'src/app/images/match/match_laptop1.jpg',
      'src/app/images/match/match_laptop2.jpg',
      'src/app/images/match/match_laptop3.jpg',
      'src/app/images/match/match_laptop4.jpg',
      'src/app/images/match/match_laptop5.jpg'
    ],
    [
      'The site of restaurant.',
      'http://uladzimir-yeudakimovich.ml/restaurant',
      'view site',
      'Online page of restaurant. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.',
      'src/app/images/restaurant/restaurant_laptop1.jpg',
      'src/app/images/restaurant/restaurant_laptop2.jpg',
      'src/app/images/restaurant/restaurant_laptop3.jpg',
      'src/app/images/restaurant/restaurant_laptop4.jpg',
      'src/app/images/restaurant/restaurant_laptop5.jpg'
    ],
    [
      'Store site.',
      'http://uladzimir-yeudakimovich.ml/css-recipes-and-layouts/',
      'view site',
      `Online store page. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.`,
      'src/app/images/site/site_laptop1.jpg',
      'src/app/images/site/site_laptop2.jpg',
      'src/app/images/site/site_laptop3.jpg',
      'src/app/images/site/site_laptop4.jpg',
      'src/app/images/site/site_laptop5.jpg'
    ],
    [
      'Application for banks.',
      '',
      '',
      `The development language is JavaScript. It was written using the National Bank API. For constructing
        graphs, we use canvas. Application for determining the exchange rate of different currencies and
        plotting the dynamics of changes over a certain period of time.`,
      'src/app/images/currency/currency_laptop1.jpg',
      'src/app/images/currency/currency_laptop2.jpg',
      'src/app/images/currency/currency_laptop3.jpg',
      'src/app/images/currency/currency_laptop4.jpg',
      'src/app/images/currency/currency_laptop5.jpg'
    ]
  ];
}
