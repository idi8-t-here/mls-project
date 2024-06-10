const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const upload = require('../middlewares/profileUploadMiddleware')

router.get('/', userController.getAllUsers);
router.get('/email/:email', userController.getUserByEmail);
router.get('/:id', userController.getUser);
router.patch('/:id', userController.updateUserStatus);
router.patch('/reject/:id', userController.rejectUserStatus);
router.post('/', upload,  userController.createUser);
router.put('/:id', upload, userController.updateUser);
router.delete('/:id', userController.deleteUser);


module.exports = router;
