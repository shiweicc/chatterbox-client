// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
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
<<<<<<< HEAD

=======
>>>>>>> 4380bc33ed370174c19e1830ea05fa45cd055c26
    return Rooms._selected;
  },

  handleClick: function(event) {
<<<<<<< HEAD
    var tempRoomName = document.getElementById('room').value;
    console.log(tempRoomName);
    RoomsView.renderRoom(tempRoomName);
=======
    Rooms.add();
>>>>>>> 4380bc33ed370174c19e1830ea05fa45cd055c26
  }
};
