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
    return Rooms._selected;
  },

  handleClick: function(event) {
    Rooms.add();
  }
};
