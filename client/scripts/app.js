// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),
<<<<<<< HEAD
=======

>>>>>>> 4380bc33ed370174c19e1830ea05fa45cd055c26
  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);
    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.startSpinner();
    App.fetch(App.stopSpinner);
    App.stopSpinner();
    setInterval(App.fetch, 5000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      MessagesView.render();
    });
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
