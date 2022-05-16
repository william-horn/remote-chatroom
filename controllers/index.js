const router = require('express').Router();

router.use('/', require('./home'));
router.use('/api', require('./api'));
router.use('/login', require('./login'));
router.use('/chatroom', require('./chatroom'));

module.exports = router;
