// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
<<<<<<< HEAD
    MessagesView.handleClick();
    MessagesView.render();
  },

  render: function() {
    Parse.readAll((data) => {
      MessagesView.$chats.empty();
      if (Rooms._selected === '') {
        for (var i = 0; i < data.length; i++) {
          var currMessage = data[i];
          if (currMessage.roomname === 'lobby') {
            MessagesView.renderMessage(currMessage);
          }
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
    message.friend = ' ';
    if (Friends.status(message.username)) {
      message.friend = ' friend';
    }
    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    MessagesView.$chats.on('click', '.username', function(event) {
      var username = event.currentTarget.textContent;
      Friends.toggleStatus(username);
      MessagesView.render();
    });
  }
=======

    MessagesView.$chats.on('click', '.username', MessagesView.handleClick);
      },

  render: function() {

    MessagesView.$chats.html('');
    Messages
      .items()
      .filter(message => Rooms.isSelected(message.roomname))
      .each(message => MessagesView.renderMessage(message));
      },

  renderMessage: function(message) {

    var $message = MessageView.render(message);
    MessagesView.$chats.prepend($message);
      },

  handleClick: function(event) {

    // Get username from data attribute
    var username = $(event.target).data('username');
    if (username === undefined) { return; }

    Friends.toggleStatus(username, MessagesView.render);
      }
>>>>>>> 4c5afc6514192a47ccc7e9b37168db43e5c4d185

};