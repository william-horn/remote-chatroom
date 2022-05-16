const router = require('express').Router();

const root_GET = (req, res) => res.render('homepage');

router
    .route('/')
    .get(root_GET)

module.exports = router;