// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
  },

  render: function() {

    Parse.readAll((data) => {

      MessagesView.$chats.empty();

      if (Rooms._selected === '') {
        for (var i = 0; i < data.length; i++) {
          var currMessage = data[i];
          MessagesView.renderMessage(currMessage);
        }
      } else {
        for (var i = 0; i < data.length; i++) {
          var currMessage = data[i];
          if (currMessage.roomname === Rooms._selected) {
            MessagesView.renderMessage(currMessage);
          }
        }
      }
    });

  },

  renderMessage: function(message) {
    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};