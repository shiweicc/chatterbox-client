// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    event.preventDefault();
<<<<<<< HEAD
    var message = {};
    message.username = App.username;
    message.text = document.getElementById('message').value;
    message.roomname = $('#rooms select').val() || 'lobby';
    Parse.create(message);
    MessagesView.render();
    console.log('click!');
  },
=======


    var message = {
      username: App.username,
      text: FormView.$form.find('#message').val(),
      roomname: Rooms.selected || 'lobby'
    };

    Parse.create(message, (data) => {
      _.extend(message, data[0]);
      Messages.add(message, MessagesView.render);
    });
      },
>>>>>>> 4c5afc6514192a47ccc7e9b37168db43e5c4d185

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};