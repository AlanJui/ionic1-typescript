var starter;
(function (starter) {
    var controllers;
    (function (controllers) {
        var DashCtrl = (function () {
            function DashCtrl() {
            }
            return DashCtrl;
        })();
        var ChatsCtrl = (function () {
            function ChatsCtrl(ChatsService) {
                this.ChatsService = ChatsService;
                this.chats = ChatsService.all();
            }
            ChatsCtrl.prototype.remove = function (chat) {
                this.ChatsService.remove(chat);
            };
            ChatsCtrl.$inject = ['ChatsService'];
            return ChatsCtrl;
        })();
        var ChatDetailCtrl = (function () {
            function ChatDetailCtrl(ChatsService, $stateParams) {
                this.ChatsService = ChatsService;
                this.$stateParams = $stateParams;
                this.chat = ChatsService.get($stateParams.chatId);
            }
            ChatDetailCtrl.$inject = ['ChatsService', '$stateParams'];
            return ChatDetailCtrl;
        })();
        var AccountCtrl = (function () {
            function AccountCtrl() {
                this.settings = {
                    enableFriends: true
                };
            }
            return AccountCtrl;
        })();
        angular.module('starter.controllers', [])
            .controller('DashCtrl', DashCtrl)
            .controller('ChatsCtrl', ChatsCtrl)
            .controller('ChatDetailCtrl', ChatDetailCtrl)
            .controller('AccountCtrl', AccountCtrl);
    })(controllers = starter.controllers || (starter.controllers = {}));
})(starter || (starter = {}));

//# sourceMappingURL=controllers.js.map
