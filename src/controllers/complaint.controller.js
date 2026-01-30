const Complaint = require('../models/complaint.model');
const asyncHandler = require('../utils/asyncHandler');

const createComplaint = asyncHandler(async (req, res) => {
  const { title, description } = req.body;

  const complaint = await Complaint.create({
    title,
    description,
    createdBy: req.user._id
  });

  res.status(201).json(complaint);
});

const getAllComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find().populate('createdBy', 'name email');
  res.json(complaints);
});

const getMyComplaints = asyncHandler(async (req, res) => {
  const complaints = await Complaint.find({ createdBy: req.user._id });
  res.json(complaints);
});

const updateComplaintStatus = asyncHandler(async (req, res) => {
  const { status } = req.body;
  const complaint = await Complaint.findById(req.params.id);

  if (!complaint) {
    res.status(404);
    throw new Error('Complaint not found');
  }

  complaint.status = status;
  await complaint.save();

  res.json(complaint);
});

const addComment = asyncHandler(async (req, res) => {
  const { message } = req.body;

  const complaint = await Complaint.findById(req.params.id);

  if (!complaint) {
    res.status(404);
    throw new Error('Complaint not found');
  }

  complaint.comments.push({
    message,
    commentedBy: req.user._id
  });

  await complaint.save();

  res.status(201).json(complaint);
});


module.exports = { createComplaint, getAllComplaints, getMyComplaints, updateComplaintStatus, addComment };