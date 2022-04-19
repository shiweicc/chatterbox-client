// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

<<<<<<< HEAD
  _data: {},

  postMessage: function () {
    $.ajax({

      url: 'https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/hr-rpp',
      type: 'POST',
      data: JSON.stringify(_data),
      contentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.error('chatterbox: Failed to send message', data);
      }
    });
  }

=======

  _data: {},
>>>>>>> 4c5afc6514192a47ccc7e9b37168db43e5c4d185

  items: function() {
    return _.chain(Object.values(Messages._data)).sortBy('createdAt');
  },

  add: function(message, callback = ()=>{}) {
    Messages._data[message.message_id] = message;
    callback(Messages.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Object.keys(Messages._data).length;

    for (let message of messages) {
      Messages._data[message.message_id] = Messages._conform(message);
    }

    // only invoke the callback if something changed
    if (Object.keys(Messages._data).length !== length) {
      callback(Messages.items());
    }
  },

  _conform: function(message) {
    // ensure each message object conforms to expected shape
    message.text = message.text || '';
    message.username = message.username || '';
    message.roomname = message.roomname || '';
    return message;
  }
  
};