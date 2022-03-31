// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  // _data: {
  //   username: 'shawndrost',
  //   text: 'trololo',
  //   roomname: '4chan'
  // },

  _data: {},

  postMessage: function () {
    $.ajax({
      // This is the url you should use to communicate with the API server.
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

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

};