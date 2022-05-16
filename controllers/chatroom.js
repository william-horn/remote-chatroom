const router = require('express').Router();

const root_GET = (req, res) => res.render('chatroom', {
    loggedIn: users.find(user => user.name === req.query.username && user.loggedIn)
});

router
    .route('/')
    .get(root_GET);

module.exports = router;