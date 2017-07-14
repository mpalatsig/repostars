const express = require('express');
const path = require('path');
const GitHub  = require('github-api');
const debug = require('debug')(`repostars:${path.basename(__filename).split('.')[0]}`);
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const gh = new GitHub({
    username: req.user.username,
    token: req.user.token
  });

  const me = gh.getUser();
  const getRepos = me => new Promise ((res, rej) => {
      me.listRepos ((e, repos) => e ? reject (e): res(repos));
  });

getRepos(me).then(repos => {
  console.log(repos);
  
})

  res.render('repos', { title: 'Express' });
});

module.exports = router;
