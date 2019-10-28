$(document).ready(function() {

  $(".devour-form").on("submit", function(event) {
    event.preventDefault();

    var burger_id = $(this).children(".burger_id").val();
    console.log(burger_id);

      /*

        use api to put burger here, server should change to devoured

        then reload page to display burger in proper column

      */

  });
});
