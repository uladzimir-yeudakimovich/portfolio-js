import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  getData() {
    return [
      {
        "name": "Messenger.",
        "description": "Full-stack development. Used technologies HTML5, CSS3, JavaScript, Node.JS, WebSockets, MySQL. It was used the express framework during the development of the server part. Communication in the MESSAGE is in the browser. Data is transferred to the server via WebSocket. The server is processed and written to the MySQL database.",
        "images" : [
          "src/app/images/chat/chat_laptop1.jpg",
          "src/app/images/chat/chat_laptop2.jpg",
          "src/app/images/chat/chat_laptop3.jpg",
          "src/app/images/chat/chat_laptop4.jpg",
          "src/app/images/chat/chat_laptop5.jpg"
        ]
      },
      {
        "name": "The Alina game",
        "link": "http://uladzimir-yeudakimovich.ml/phaser-game/",
        "click": "play",
        "description": "This game is 'arcade'. The development language is JavaScript. It was written using the Phaser framework, the presentation was performed using the Bootstrap framework and connecting the jQuery library.",
        "images" : [
          "src/app/images/game/game_laptop1.jpg",
          "src/app/images/game/game_laptop2.jpg",
          "src/app/images/game/game_laptop3.jpg",
          "src/app/images/game/game_laptop4.jpg",
          "src/app/images/game/game_laptop5.jpg"
        ]
      },
      {
        "name": "Social-network.",
        "link": "http://uladzimir-yeudakimovich.ml/social-network/",
        "click": "view site",
        "description": "It was written in HTML5, CSS3 and JavaScript. I used vector graphics svg for drawing icons and Yandex maps API for adding a map to the page.",
        "images" : [
          "src/app/images/social/social_laptop1.jpg",
          "src/app/images/social/social_laptop2.jpg",
          "src/app/images/social/social_laptop3.jpg",
          "src/app/images/social/social_laptop4.jpg",
          "src/app/images/social/social_laptop5.jpg"
        ]
      },
      {
        "name": "Application.",
        "link": "http://uladzimir-yeudakimovich.mlreact-app/",
        "click": "view application",
        "description": "Task Scheduler To-DO-List. The development language is JavaScript. It was written with the use of the React framework, with the connection of the Redux library.",
        "images" : [
          "src/app/images/react/app_laptop1.jpg",
          "src/app/images/react/app_laptop2.jpg",
          "src/app/images/react/app_laptop3.jpg",
          "src/app/images/react/app_laptop4.jpg",
          "src/app/images/react/app_laptop5.jpg"
        ]
      },
      {
        "name": "Math-match-game.",
        "link": "http://uladzimir-yeudakimovich.ml/match-match-game/",
        "click": "play",
        "description": "Game for the development of memory. It was written in HTML5, CSS3 and JavaScript.",
        "images" : [
          "src/app/images/match/match_laptop1.jpg",
          "src/app/images/match/match_laptop2.jpg",
          "src/app/images/match/match_laptop3.jpg",
          "src/app/images/match/match_laptop4.jpg",
          "src/app/images/match/match_laptop5.jpg"
        ]
      },
      {
        "name": "The site of restaurant.",
        "link": "http://uladzimir-yeudakimovich.ml/restaurant",
        "click": "view site",
        "description": "Online page of restaurant. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.",
        "images" : [
          "src/app/images/restaurant/restaurant_laptop1.jpg",
          "src/app/images/restaurant/restaurant_laptop2.jpg",
          "src/app/images/restaurant/restaurant_laptop3.jpg",
          "src/app/images/restaurant/restaurant_laptop4.jpg",
          "src/app/images/restaurant/restaurant_laptop5.jpg"
        ]
      },
      {
        "name": "Store site.",
        "link": "http://uladzimir-yeudakimovich.ml/css-recipes-and-layouts/",
        "click": "view site",
        "description": "Online store page. It was written in HTML5 using CSS Grid Layout and CSS Flexbox.",
        "images" : [
          "src/app/images/site/site_laptop1.jpg",
          "src/app/images/site/site_laptop2.jpg",
          "src/app/images/site/site_laptop3.jpg",
          "src/app/images/site/site_laptop4.jpg",
          "src/app/images/site/site_laptop5.jpg"
        ]
      },
      {
        "name": "Application for banks.",
        "description": "The development language is JavaScript. It was written using the National Bank API. For constructing graphs, we use canvas. Application for determining the exchange rate of different currencies and plotting the dynamics of changes over a certain period of time.",
        "images" : [
          "src/app/images/currency/currency_laptop1.jpg",
          "src/app/images/currency/currency_laptop2.jpg",
          "src/app/images/currency/currency_laptop3.jpg",
          "src/app/images/currency/currency_laptop4.jpg",
          "src/app/images/currency/currency_laptop5.jpg"
        ]
      }
    ];
  }
}
