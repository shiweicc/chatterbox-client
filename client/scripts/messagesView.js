// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    MessagesView.render();
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    // TODO: Render _all_ the messages.
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log('this is the data', data);
      // TODO: Use the data to update Messages and Rooms
      for (var i = 0; i < data.length; i++) {
        var currMessage = data[i];
        MessagesView.renderMessage(currMessage);
      }
      // and re-render the corresponding views.
    });

  },

  renderMessage: function(message) {
    // TODO: Render a single message.
    var $message = MessageView.render(message);
    MessagesView.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
  }

};