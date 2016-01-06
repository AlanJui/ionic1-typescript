/// <reference path="../typings/tsd.d.ts" />

class DashCtrl {
  constructor() {}
}

class ChatsCtrl {
  public $inject = ['Chats'];
  chats: any[];
  constructor(public Chats) {
    this.chats = Chats.all();
  }
  remove(chat) {
    this.Chats.remove(chat);
  }
}

class ChatDetailCtrl {
  public $inject = ['Chats', '$stateParams'];
  chat: Object;
  constructor(
    public Chats: any,
    public $stateParams: ng.ui.IStateParamsService
  ) {
    this.chat = Chats.get($stateParams.chatId);
  }
}

interface ISettings {
  enableFriends: Boolean;
}
class AccountCtrl {
  public settings: ISettings;
  constructor() {
    this.settings.enableFriends = true;
  }
}

angular.module('starter.controllers', [])
  .controller('DashCtrl', DashCtrl)
  .controller('ChatsCtrl', ChatsCtrl)
  .controller('ChatDetailCtrl', ChatDetailCtrl)
  .controller('AccountCtrl', AccountCtrl);
