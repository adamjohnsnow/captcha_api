const pg = require('pg');
const connectionString = const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/captcha_api_dev'

const data = {

  mains: [
    {id:300, img:'http://i.imgur.com/kvToefa.jpg'},
    {id:301, img:'http://i.imgur.com/SurS3Kl.jpg'},
    {id:302, img:'http://i.imgur.com/6sb4dDg.jpg'},
    {id:303, img:'http://i.imgur.com/Bk4S00a.jpg'},
    {id:304, img:'http://i.imgur.com/Kk0o5ZI.jpg'}
  ],

  solutions: [
    {id:300, img:'http://i.imgur.com/z7BxMwH.jpg'},
    {id:301, img:'http://i.imgur.com/oxEHv4A.jpg'},
    {id:302, img:'http://i.imgur.com/mwEuphB.png'},
    {id:303, img:'http://i.imgur.com/nFlLuwp.jpg'},
    {id:304, img:'http://i.imgur.com/5WVbJTh.jpg'}
  ],

  decoys: [
    {id:000, img:'http://i.imgur.com/0XsFBQ4.png'},
    {id:001, img:'http://i.imgur.com/rw4Q6Pn.png'},
    {id:002, img:'http://i.imgur.com/zF0U9Pr.jpg'},
    {id:003, img:'http://i.imgur.com/lyrD6Pq.jpg'},
    {id:004, img:'http://i.imgur.com/uK3Yh0O.jpg'},
    {id:005, img:'http://i.imgur.com/Qct8710.jpg'},
    {id:006, img:'http://i.imgur.com/8HP99Hw.jpg'},
    {id:007, img:'http://i.imgur.com/4I7rmI7.jpg'},
    {id:008, img:'http://i.imgur.com/xFNrjPt.jpg'},
    {id:009, img:'http://i.imgur.com/WjTvoeB.png'}
  ]
};
