const router = require('express').Router();

const root_GET = (req, res) => res.render('login');

const root_POST = (req, res) => {
    const { username, password } = req.body;
    const localUser = users.find(user => user.name === username && user.password === password);

    if (!localUser) return res.status(404).json({ message: 'No user found' });
    if (localUser.loggedIn) return res.status(500).json({ message: 'User is already logged in' });

    localUser.loggedIn = true;
    res.status(200).json({ message: 'Login successful', loggedIn: true });
}

router
    .route('/')
    .get(root_GET)
    .post(root_POST);

module.exports = router;