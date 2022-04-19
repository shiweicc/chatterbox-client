// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),


  initialize: function() {
<<<<<<< HEAD
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.render();
    Rooms.selected();
  },

  render: function() {
    Rooms.getRooms();
  },

  renderRoom: function(roomname) {
    var $singleRoom = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($singleRoom);
  },

  handleChange: function(event) {
    var currentlySelected = RoomsView.$select.val();
    console.log('this is currently selected', currentlySelected);
    if (currentlySelected) {
      Rooms._selected = currentlySelected;
      MessagesView.render();
    }
    return Rooms._selected;
  },

  handleClick: function(event) {
    Rooms.add();
  }
=======

    RoomsView.$select.on('change', RoomsView.handleChange);
    RoomsView.$button.on('click', RoomsView.handleClick);
      },

  render: function() {

    RoomsView.$select.html('');
    Rooms
      .items()
      .each(RoomsView.renderRoom);
    RoomsView.$select.val(Rooms.selected);
      },

  renderRoom: function(roomname) {

    var $option = $('<option>').val(roomname).text(roomname);
    RoomsView.$select.append($option);
      },

  handleChange: function(event) {

    Rooms.selected = RoomsView.$select.val();
    MessagesView.render();
      },

  handleClick: function(event) {

    var roomname = prompt('Enter room name');
    if (roomname) {
      Rooms.add(roomname, () => {
        RoomsView.render();
        MessagesView.render();
      });
    }
      }

>>>>>>> 4c5afc6514192a47ccc7e9b37168db43e5c4d185
};
