$(document).ready(function() {

  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);

      /*

        use api to put burger here, server should change to devoured

        then reload page to display burger in proper column

      */

      var newDevoured = $(this).data("newdevoured");

      var newDevouredState = {
        devoured: newDevoured
      };

      // Send the Put request.
      $.ajax("/burgers/" + burger_id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("Changed burger to ", newDevoured);
          location.reload();
        }
      );
  });
});
