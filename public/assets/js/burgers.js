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

    $(".devour").on("click", function() {
        var devourData = {
            id: $(this).attr("data-id")
        };

        $.ajax("/burger/eat", {
            type: "POST",
            data: devourData
        }).then(function() {
            alert("burger devoured!");
            location.reload();
        });
    });

    $(".restore").on("click", function() {
        var restoreData = {
            id: $(this).attr("data-id")
        };

        $.ajax("/burger/restore", {
            type: "POST",
            data: restoreData
        }).then(function() {
            alert("burger restored!");
            location.reload();
        });
    });
});