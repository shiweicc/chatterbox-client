// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();


    App.startSpinner();
    App.fetch(App.stopSpinner);
<<<<<<< HEAD
    App.stopSpinner();
    setInterval(App.fetch, 5000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      MessagesView.render();
    });
=======


    // Poll for new messages every 3 sec
    setInterval(App.fetch, 3000);
      },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {

      // Only update if we have messages.
      if (data && data.length) {
        Rooms.update(data, RoomsView.render);
        Messages.update(data, MessagesView.render);
 
        callback();
      }
      return;
      
          });
>>>>>>> 4c5afc6514192a47ccc7e9b37168db43e5c4d185
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};