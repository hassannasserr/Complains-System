const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/auth.middleware');
const {createComplaint,getAllComplaints,getMyComplaints,updateComplaintStatus} = require('../controllers/complaint.controller');
const { authorize } = require('../middlewares/role.middleware');

router.post('/', protect, createComplaint);

router.get('/', protect, authorize('admin'), getAllComplaints);
router.get('/my', protect, getMyComplaints);
router.put('/:id/status', protect, authorize('admin', 'employee'), updateComplaintStatus);

module.exports = router;