const express = require('express');
const router = express.Router();
const propertyController = require('../controllers/propertyController');
const upload = require('../middlewares/propertyUploadMiddleware')

router.get('/', propertyController.getAllProperties);
router.get('/:id', propertyController.getProperty);
router.get('/agent/:id', propertyController.getPropertyByAgentId);
router.post('/', upload, propertyController.createProperty);
router.patch('/:id', propertyController.updateApprovalStatus);
router.patch('/reject/:id', propertyController.updateRejectStatus);
router.put('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);

module.exports = router;
