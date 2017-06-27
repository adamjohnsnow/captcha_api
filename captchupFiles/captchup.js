

function selectImage(event){
  var answer = 'id=' + gameKey + '&img=' + event.target.currentSrc
  $.post("https://arcane-depths-35133.herokuapp.com/answer?" + answer, function(response){
    response ? $( "#captchup" ).dialog( "close" ) : captchup();
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
    document.getElementById('captchup').innerHTML = string;
    return gameKey = data.gameKey
  });


  $(function() {
    $("#captchup").dialog({
      dialogClass: "no-close",
      modal: true,
      width: "auto",
      closeOnEscape: false,
      resizable: false,
      Height: 700,
      Width: 700,
      position: { my: "center", at: "top", of: window }
    })
  })
};

$('#captchupButton').click(function(event){
  event.preventDefault()
  captchup();

})
