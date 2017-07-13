//
// var input = $("#message").val();.
// var input = "Epicodus takes too long";
// var letters = input.split("");
// var length = letters.length;


$(function()  {
  $("#message").submit(function(event)  {
    var input = $("#message").val();
    alert("hi");

    event.preventDefault()
  });
});
