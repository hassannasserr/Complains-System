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


module.exports = { createComplaint };