// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {

<<<<<<< HEAD
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
=======
  _data: new Set,

  items: function() {
    return _.chain([...Friends._data]);
  },
>>>>>>> 4c5afc6514192a47ccc7e9b37168db43e5c4d185

  isFriend: function(name) {
    return Friends._data.has(name);
  },

  toggleStatus: function(name, callback = ()=>{}) {
    if (Friends._data.has(name)) {
      Friends._data.delete(name);
      callback(false);
    } else {
      Friends._data.add(name);
      callback(true);
    }
  }
  
};