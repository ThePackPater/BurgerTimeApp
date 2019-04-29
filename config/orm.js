var connection = require("./connection.js");

var orm = {
    all: function(tableInput, cb) {
        connection.query("SELECT * FROM " + tableInput + ";", function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },

    insertOne: function(tablename, colname, burger_name, cb) {
        connection.query(
            "INSERT INTO ?? (??) VALUES (?)", [tablename, colname, burger_name],
            function(err, res) {
                if (err) throw err;
                console.log(result);
                cb(res);
            });
    },

    updateOne: function(devoured, id, cb) {

        connection.query("UPDATE burgers_db.burgers SET devoured = ? WHERE id = ?", [devoured, id], function(err, res) {
            if (err) throw err;
            console.log(res);
            cb(res);

        });
    }
};

module.exports = orm;