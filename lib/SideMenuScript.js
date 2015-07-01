$(document).ready(function(){
  $(".innerBox").click(function() {
    $(".hidden", this).toggle({
      "display": "block"
    });
  })
});
