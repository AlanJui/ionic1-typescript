/// <reference path="../typings/tsd.d.ts" />
/// <reference path="./services.ts" />

module starter.controllers {
  
  class DashCtrl {}

  class ChatsCtrl {
    private chats: starter.services.IChatsUser[]; 
    
    static $inject = ['ChatsService'];
    constructor(
      private ChatsService: starter.services.IChatsService
    ) {
      this.chats = ChatsService.all();
    }
    public remove(chat: starter.services.IChatsUser): void {
      this.ChatsService.remove(chat);
    }
  }

  interface IStateParams extends ng.ui.IStateParamsService {
    chatId: string;
  }

  class ChatDetailCtrl {
    private chat: starter.services.IChatsUser;
    
    static $inject = ['ChatsService', '$stateParams'];
    constructor(
      private ChatsService: starter.services.ChatsService,
      private $stateParams: IStateParams
    ) {
      this.chat = ChatsService.get($stateParams.chatId);
    }
  }

  class AccountCtrl {
    private settings: Object;
    
    constructor() {
      this.settings = {
        enableFriends: true
      };
    }
  }

  angular.module('starter.controllers', [])
    .controller('DashCtrl', DashCtrl)
    .controller('ChatsCtrl', ChatsCtrl)
    .controller('ChatDetailCtrl', ChatDetailCtrl)
    .controller('AccountCtrl', AccountCtrl);

}