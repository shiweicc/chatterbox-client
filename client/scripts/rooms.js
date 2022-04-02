// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
// TODO: Define how you want to store the list of rooms

var Rooms = {
  $addRoomInput: $('#rooms #room'),
  _data: new Set(),
  _selected: '',

  getRooms: function () {
    Parse.readAll((data) => {
      for (var i = 0; i < data.length; i++) {
        var currRoom = data[i].roomname;
        Rooms._data.add(currRoom);
      }
      Rooms._data.forEach(item => {
        RoomsView.renderRoom(item);
      });
    });
  },

  add: function() {
    var $tempRoomName = $('#Rooms #room').val();
    if ($tempRoomName === '') {
      console.log('Please fill in a room name.');
    } else {
      RoomsView.renderRoom($tempRoomName);
    }
  },


  selected: () => {
    var currentlySelected = $('#rooms select').val();
    if (currentlySelected) {
      Rooms._selected = currentlySelected;
      MessagesView.render();
    }
    return Rooms._selected;
  }

};