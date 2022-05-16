const router = require('express').Router();
const User = require('../../models/Users');

const root_GET = async (req, res) => {
    const users = await User.findAll();
    res.json({ 
        message: 'list of users',
        content: users
    });
}

router
    .route('/')
    .get(root_GET)

module.exports = router;