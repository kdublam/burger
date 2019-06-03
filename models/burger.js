// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  insertOne: function(burger_name, cb) {
    orm.insertOne("burgers", burger_name, function(res) {
      cb(res);
    });
  },
  updateOne: function(burger_id, cb) {
    orm.updateOne("burgers", burger_id, function(res) {
      cb(res);
    });
  }
  // delete: function(condition, cb) {
  //   orm.delete("burgers", condition, function(res) {
  //     cb(res);
  //   });
  // }
};

// Export the database functions for the controller (burgers_Controller.js).
module.exports = burgers;
