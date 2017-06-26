var mains = [
  { id: 201, img:'http://i.imgur.com/4AehZVQ.jpg', prompt: 'Click the Coke Label' },
  { id: 204, img: 'http://i.imgur.com/QyU5v2N.jpg', prompt: 'Click on the number eight' },
  { id: 202, img:'http://i.imgur.com/Nz68cPK.jpg', prompt: 'Click the Orange Letter' },
  { id: 203, img: 'http://i.imgur.com/HoBl8Mq.jpg', prompt: 'Click on Michael Jordan\'s Armband'}
]
var solutions = [
  { id: 201, xLowLimit: 138, xHighLimit: 181, yLowLimit: 57, yHighLimit: 125 },
  { id: 202, xLowLimit: 163, xHighLimit: 226, yLowLimit: 58, yHighLimit: 124 },
  { id: 203, xLowLimit: 304, xHighLimit: 341, yLowLimit: 207, yHighLimit: 245 },
  { id: 204, xLowLimit: 287, xHighLimit: 348, yLowLimit: 38, yHighLimit: 104 }
]

var ClickArea = function(stubNumber){
  var randomIndex = stubNumber || Math.floor(Math.random() * mains.length)
  this.type = 'clickArea'
  this.gameKey = mains[randomIndex].id;
  this.gameData = mains[randomIndex];
}

ClickArea.prototype.getSolution = function(answer){
  console.log(answer)
  function findSolution(hash) {
    return hash.id === Number(answer.id);
  }
  var solution = solutions.find(findSolution);
  return (
    Number(answer.x) > solution.xLowLimit &&
    Number(answer.x) < solution.xHighLimit &&
    Number(answer.y) > solution.yLowLimit &&
    Number(answer.y) < solution.yHighLimit
  );
}

module.exports = ClickArea;

// brandedCaptcha@#$123
