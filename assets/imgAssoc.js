// var mains = [
//   {id:300, img:'http://i.imgur.com/kvToefa.jpg'},
//   {id:301, img:'http://i.imgur.com/SurS3Kl.jpg'},
//   {id:302, img:'http://i.imgur.com/6sb4dDg.jpg'},
//   {id:303, img:'http://i.imgur.com/Bk4S00a.jpg'},
//   {id:304, img:'http://i.imgur.com/Kk0o5ZI.jpg'}
// ]
//
// var solutions = [
//   {id:300, img:'http://i.imgur.com/z7BxMwH.jpg'},
//   {id:301, img:'http://i.imgur.com/oxEHv4A.jpg'},
//   {id:302, img:'http://i.imgur.com/mwEuphB.png'},
//   {id:303, img:'http://i.imgur.com/nFlLuwp.jpg'},
//   {id:304, img:'http://i.imgur.com/5WVbJTh.jpg'}
// ]
//
// var decoys = [
//   {id:000, img:'http://i.imgur.com/0XsFBQ4.png'},
//   {id:001, img:'http://i.imgur.com/rw4Q6Pn.png'},
//   {id:002, img:'http://i.imgur.com/zF0U9Pr.jpg'},
//   {id:003, img:'http://i.imgur.com/lyrD6Pq.jpg'},
//   {id:004, img:'http://i.imgur.com/uK3Yh0O.jpg'},
//   {id:005, img:'http://i.imgur.com/Qct8710.jpg'},
//   {id:006, img:'http://i.imgur.com/8HP99Hw.jpg'},
//   {id:007, img:'http://i.imgur.com/4I7rmI7.jpg'},
//   {id:008, img:'http://i.imgur.com/xFNrjPt.jpg'},
//   {id:009, img:'http://i.imgur.com/WjTvoeB.png'}
// ]

  var result = getMain.result

  var ImgAssoc = function(stubNumber){
    this.type = 'imgAssoc'
    var game = getMain(this.type)
    // this.promptStrings = this.newPromptArray(mainImage.id)

    this.gameData = {
      mainString: game.main,
    //   // promptStrings: this.promptStrings,
      gameKey: game.id
    };
  };


ImgAssoc.prototype.newPromptArray = function(mainImageId){

  var decoy1 = decoys[Math.floor(Math.random() * decoys.length)].img
  var decoy2 = decoys[Math.floor(Math.random() * decoys.length)].img

  var getDecoy2 = function(){
    while(decoy1 == decoy2){ decoy2 = decoys[Math.floor(Math.random() * decoys.length)].img }
    return decoy2
  };

  newPromptArray = []
  newPromptArray.push(decoy1)
  newPromptArray.push(getDecoy2())
  newPromptArray.push(this.getSolution(mainImageId).img)

  function shuffle(array) {
    for (let i = array.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [array[i - 1], array[j]] = [array[j], array[i - 1]];
    };
  };

  shuffle(newPromptArray)
  return newPromptArray
};

ImgAssoc.prototype.getSolution = function(mainImageid){
  function findSolution(hash) {
    return hash.id === mainImageid;
  };
  return solutions.find(findSolution);
};

ImgAssoc.prototype.checkAnswer = function(answer){
  function findImage(hash) {
    return Number(answer.id) === hash.id;
  };
  var returnedImage = solutions.find(findImage);
  return returnedImage.img === answer.img;
}

module.exports = ImgAssoc;
