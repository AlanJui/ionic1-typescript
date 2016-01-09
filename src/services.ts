/// <reference path="../typings/tsd.d.ts" />

module starter.services {

  export interface IChatsUser {
    id: number;
    name: string;
    lastText: string;
    face: string;
  }

  export interface IChatsService {
    all(): Array<IChatsUser>;
    remove(chat: IChatsUser): void;
    get(chatId: string): IChatsUser;
  }

  export class ChatsService implements IChatsService {
    private chats: Array<IChatsUser>;

    constructor() {
      this.chats = [
        {
          id: 0,
          name: 'Ben Sparrow',
          lastText: 'You on your way?',
          face: 'img/ben.png'
        },
        {
          id: 1,
          name: 'Max Lynx',
          lastText: 'Hey, it\'s me',
          face: 'img/max.png'
        },
        {
          id: 2,
          name: 'Adam Bradleyson',
          lastText: 'I should buy a boat',
          face: 'img/adam.jpg'
        },
        {
          id: 3,
          name: 'Perry Governor',
          lastText: 'Look at my mukluks!',
          face: 'img/perry.png'
        },
        {
          id: 4,
          name: 'Mike Harrington',
          lastText: 'This is wicked good ice cream.',
          face: 'img/mike.png'
        }
      ];
    }

    all(): IChatsUser[] {
      return this.chats;
    }

    remove(chat: IChatsUser): void {
      this.chats.splice(this.chats.indexOf(chat), 1);
    }

    get(chatId: string): IChatsUser {
      for (let i = 0; i < this.chats.length; i++) {
        if (this.chats[i].id === parseInt(chatId)) {
          return this.chats[i];
        }
      }
      return null;
    }
  }

  angular.module('starter.services', [])
    .service('ChatsService', ChatsService);
}

