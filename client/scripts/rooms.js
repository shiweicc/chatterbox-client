// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {
  // TODO: Define how you want to store the list of rooms
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


  selected: () => {
    var currentlySelected = $('#rooms select').val();
    // console.log(currentlySelected);
    if (currentlySelected) {
      Rooms._selected = currentlySelected;
      MessagesView.render();
    }
    return Rooms._selected;
  }


  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

};