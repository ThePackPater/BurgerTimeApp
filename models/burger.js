// import `orm.js`
var orm = require("../config/orm.js");
// create the code that will call the ORM functions using burger specific input for the ORM.

var burger = {
    all: function(cb) {
        orm.all("burgers", function(res) {
            cb(res);
        });
    },

    insertOne: function(burger_name, cb) {
        orm.insertOne("burgers", "burger_name", burger_name, function(res) {
            cb(res);
        });
    },

    updateOne: function(id, cb) {
        orm.updateOne(true, id, function(res) {

            cb(res);
        });
    },
    restoreOne: function(id, cb) {
        orm.updateOne(false, id, function(res) {

            cb(res);
        });

    }
};

// Export the `burger.js` file.
module.exports = burger;