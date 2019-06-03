// Import MySQL connection.
var connection = require("../config/connection.js");

// Object for all our SQL statement functions.
var orm = {
  selectAll: function(table, cb) {
    var queryString = "SELECT * FROM " + table + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  insertOne: function(table, burger_name, cb) {
    var queryString = "INSERT INTO " + table + " SET ?";

    console.log(queryString);

    connection.query(
      queryString,
      {
        burger_name: burger_name,
        devoured: false
      },
      function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      }
    );
  },
  updateOne: function(table, burgerID, cb) {
    var queryString = "UPDATE " + table + " SET ? WHERE ?";

    console.log(queryString);
    connection.query(
      queryString,
      [{ devoured: true }, { id: burgerID }],
      function(err, result) {
        if (err) {
          throw err;
        }

        cb(result);
      }
    );
  }
  // delete: function(table, condition, cb) {
  //   var queryString = "DELETE FROM " + table;
  //   queryString += " WHERE ";
  //   queryString += condition;

  //   connection.query(queryString, function(err, result) {
  //     if (err) {
  //       throw err;
  //     }

  //     cb(result);
  //   });
  // }
};

// Export the orm object for the model (burger.js).
module.exports = orm;
