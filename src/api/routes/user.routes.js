const express = require('express');
const {postLogin, postcheck, postRegister} = require('../controllers/user.controllers');

const router = express.Router();

router.post('/login', postLogin);
router.post('/register', postRegister);
router.post('/postcheck', postcheck);
router.post('/admin',postLogin);

module.exports = router;


