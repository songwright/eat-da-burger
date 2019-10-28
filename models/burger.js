var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    //
    // return all burgers
    //
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    //
    // create burger
    //
    orm.create("burgers", name, cb, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    //
    // modify burger
    //
    orm.update("burgers", id, cb, function(res) {
      cb(res);
    })
  }
};

module.exports = burger;
