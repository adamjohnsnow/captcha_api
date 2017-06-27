var imgAssoc = require('../assets/imgAssoc.js')
var captcha
describe('imgAssoc', function(){

  beforeEach(function(){
    captcha = new imgAssoc(1);
  })

  it('instantiates', function(){
    expect(captcha instanceof imgAssoc).toBeTruthy();
  });

  it('automatically returns an image url when prompted with an argument', function(){
    expect(captcha.gameData.mainString).toEqual('http://i.imgur.com/SurS3Kl.jpg');
  });

  it('returns the correct solution ID when provided a main image', function(){
    var mainImage = {id:301, img:'ronaldo'}
    expect(captcha.getSolution(mainImage.id)).toEqual({id:301, img:'http://i.imgur.com/oxEHv4A.jpg'});
  });

  it('returns a prompt array', function(){
    expect(captcha.promptStrings.length).toEqual(3)
  })

  it('Captcha carries info on gameData including a gamekey', function(){
    expect(Object.keys(captcha.gameData).length).toEqual(3)
    expect(captcha.gameKey).toBeTruthy()
  })
})
