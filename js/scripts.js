$(document).ready(function() {
  $("button#light").click(function() {
    $("body").removeClass();
    $("body").addClass("light-background");
  });

  $("button#dark").click(function() {
    $("body").removeClass();
    $("body").addClass("dark-background");
  });

  $("p#highlight").click(function() {
    $("body").removeClass();
    $("p#highlight").addClass("border");
  });
});
