$.get("http://localhost:7070/db", function( data ) {
  console.log(data)
  var string =
  '<p><img src="http://i.imgur.com/WGLuxAA.png"width="450"></img></p>'+
  '<img src="' +  data.mainString  + '" width="450"></img>'+
  '<p><img onclick="selectImage(event)" src="' +  data.promptStrings[0]  + '" width="150">'+
  '<img onclick="selectImage(event)" src="' +  data.promptStrings[1]  + '" width="150">'+
  '<img onclick="selectImage(event)" src="' +  data.promptStrings[2]  + '" width="150"></p>';
  document.getElementById('captchup').innerHTML = string;
  return gameKey = data.gameKey
});

function selectImage(event){
  var answer = 'id=' + gameKey + '&img=' + event.target.currentSrc
  $.post("http://localhost:7070/db?" + answer, function(response){
    $('#response').val(response)
  })
}

var captchup = function() {
  $(function() {
    $("#captchup").dialog({
      modal: false,
      width: "auto",
      closeOnEscape: false,
      resizable: false,
      Height: 700,
      Width: 700,
      position: { my: "center", at: "top", of: window }
    });
  });
};

captchup();
