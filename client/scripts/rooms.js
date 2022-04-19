// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {
<<<<<<< HEAD
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


  add: function() {
    var $tempRoomName = $('#rooms #room').val();
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
=======


  _data: new Set,

  selected: 'lobby',

  items: function() {
    return _.chain([...Rooms._data]);
  },

  isSelected: function(roomname) {
    return roomname === Rooms.selected ||
           !roomname && Rooms.selected === 'lobby';
  },

  add: function(room, callback = ()=>{}) {
    Rooms._data.add(room);
    Rooms.selected = room;
    callback(Rooms.items());
  },

  update: function(messages, callback = ()=>{}) {
    var length = Rooms._data.size;

    _.chain(messages)
      .pluck('roomname')
      .uniq()
      .each(room => Rooms._data.add(room));

    if (Rooms.selected === null) {
      // make the first room the default selected room
      Rooms.selected = Rooms._data.values().next().value;
    }

    // only invoke the callback if something changed
    if (Rooms._data.size !== length) {
      callback(Rooms.items());
    }
  }
  
>>>>>>> 4c5afc6514192a47ccc7e9b37168db43e5c4d185
};