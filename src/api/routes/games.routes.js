const express = require('express');
const upload = require('../../middleware/upload');
//sconst { isAdmin, isAuth } = require('../../middleware/auth');

const router = express.Router();

const {getGame, putGame, getGameById, postGame, deleteGame} = require('../controllers/games.controllers');

router.get('/:id', getGameById);
router.put('/:id', upload.single('image'),putGame);
router.delete('/:id', deleteGame);
router.post('/', upload.single('image'), postGame);
router.get('/', getGame);


module.exports = router;