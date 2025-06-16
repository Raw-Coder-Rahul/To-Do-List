const express = require('express');
const { createToDO, getAllToDo, deleteToDo, updateToDo } = require('../controllers/ToDoController');
const authenticateToken = require('../middleware/authJwt');
const router = express.Router();


router.post('/create-to-do', authenticateToken,createToDO);
router.get('/get-all-to-do/:userId', authenticateToken, getAllToDo);
router.delete('/delete-to-do/:id', authenticateToken, deleteToDo);
router.patch('/update-to-do/:id', authenticateToken, updateToDo);

module.exports = router;