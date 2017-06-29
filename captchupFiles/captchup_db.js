function selectImage(event){
  var answer = 'id=' + gameKey + '&img=' + event.target.currentSrc
  $.post("https://captchup-api.herokuapp.com/db?" + answer, function(response){
    response ? $('#captchupForm').submit() : captchup();
  })
}

var captchup = function() {

  $.get("https://captchup-api.herokuapp.com/db", function( data ) {
    var string;
    if ( data.gameType == 'imgAssoc') {
      string = '<h4>Are you a robot?</h4>' +
        '<img src="' +  data.mainString  + '" width="600"></img>'+
        '<p><img onclick="selectImage(event)" src="' +  data.promptStrings[0]  + '" width="200">'+
        '<img onclick="selectImage(event)" src="' +  data.promptStrings[1]  + '" width="200">'+
        '<img onclick="selectImage(event)" src="' +  data.promptStrings[2]  + '" width="200"></p>';
    } else {
      string = '';
    }

    $('#captchup').html(string);
    return gameKey = data.gameKey
  });

  $(function() {
    $("#captchup").dialog({
      dialogClass: "ui-dialog-titlebar-close",
      buttons: [],
      modal: true,
      width: "auto",
      draggable: true,
      closeOnEscape: false,
      resizable: false,
      position: { my: "center center", at: "center center", of: window }
    })
  })
};

$('#captchupForm').find(':submit').click(function(event){
  event.preventDefault()
  captchup();
})
