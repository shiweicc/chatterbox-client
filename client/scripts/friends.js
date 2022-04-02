// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {

  list: new Set(),

  toggleStatus: (friend) => {
    if (Friends.status(friend)) {
      Friends.list.delete(friend);
    } else {
      Friends.list.add(friend);
    }
  },

  status: (friend) => {
    if (Friends.list.has(friend)) {
      return true;
    } else {
      return false;
    }
  }

};