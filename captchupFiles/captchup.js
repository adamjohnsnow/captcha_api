function selectImage(event){
  var answer = 'id=' + gameKey + '&img=' + event.target.currentSrc
  $.post("https://arcane-depths-35133.herokuapp.com/answer?" + answer, function(response){
    response ? $('#captchupForm').submit() : captchup();
  })
}

var captchup = function() {

  $.get("https://arcane-depths-35133.herokuapp.com", function( data ) {
    var string =
    '<p><img src="http://i.imgur.com/WGLuxAA.png"width="450"></img></p>'+
    '<img src="' +  data.mainString  + '" width="450"></img>'+
    '<p><img onclick="selectImage(event)" src="' +  data.promptStrings[0]  + '" width="150">'+
    '<img onclick="selectImage(event)" src="' +  data.promptStrings[1]  + '" width="150">'+
    '<img onclick="selectImage(event)" src="' +  data.promptStrings[2]  + '" width="150"></p>';
    $('#captchup').html(string);
    return gameKey = data.gameKey
  });

  $(function() {
    $("#captchup").dialog({
      modal: true,
      width: "auto",
      draggable: true,
      closeOnEscape: false,
      resizable: false,
      Height: 700,
      position: { my: "top", at: "center top", of: window }
    })
  })
};

$('#captchupForm').find(':submit').click(function(event){
  event.preventDefault()
  captchup();
})
