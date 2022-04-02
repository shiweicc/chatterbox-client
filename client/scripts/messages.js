// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

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


};