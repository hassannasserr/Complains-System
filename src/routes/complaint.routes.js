const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/auth.middleware');
const {createComplaint} = require('../controllers/complaint.controller');

router.post('/', protect, createComplaint);

module.exports = router;