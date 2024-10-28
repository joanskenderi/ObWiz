const express = require('express');

const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/userController');

const router = express.Router();

router.get('/users', getUsers);
router.get('/users/:personalId', getUser);
router.post('/users', createUser);
router.put('/users/:personalId', updateUser);
router.delete('/users/:personalId', deleteUser);

module.exports = router;
