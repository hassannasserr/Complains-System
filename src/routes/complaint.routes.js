const express = require('express');
const router = express.Router();
const {protect} = require('../middlewares/auth.middleware');
const {createComplaint,getAllComplaints,getMyComplaints,updateComplaintStatus,addComment} = require('../controllers/complaint.controller');
const { authorize } = require('../middlewares/role.middleware');

router.post('/', protect, createComplaint);

router.get('/', protect, authorize('admin'), getAllComplaints);
router.get('/my', protect, getMyComplaints);
router.put('/:id/status', protect, authorize('admin', 'employee'), updateComplaintStatus);
router.post(
  '/:id/comment',
  protect,
  authorize('admin', 'employee'),
  addComment
);

module.exports = router;