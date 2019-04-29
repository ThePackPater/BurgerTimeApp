$(document).ready(function() {
    $("#submit").on("click", function() {
        var burgerData = {
            burger_name: $("#new_burger")
                .val()
                .trim()
        };

        $.ajax("/burger/create", {
            type: "POST",
            data: burgerData
        }).then(function() {
            console.log("created new burger");
            location.reload();
        });
    });

    $(".devour-btn").on("click", function() {
        var devourData = {
            id: ($(this).val())
        };
        $.ajax("/burger/eat", {
            type: "POST",
            data: devourData
        }).then(function() {
            console.log("burger devoured!");
            console.log(devourData);
            location.reload();
        });
    });

    $(".restore-btn").on("click", function() {
        var restoreData = {
            id: ($(this).val())
        };
        $.ajax("/burger/restore", {
            type: "POST",
            data: restoreData
        }).then(function() {
            console.log("burger restored!");
            console.log(restoreData);
            location.reload();
        });
    });
});