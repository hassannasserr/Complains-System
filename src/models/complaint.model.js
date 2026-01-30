const mongoose = require('mongoose');


const complaintSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true,
    },
    status:{
        type: String,
        enum: ['pending', 'in_progress', 'resolved','rejected'],
        default: 'pending',
    },
    createdBy:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
        comments: [
    {
        message: { type: String, required: true },
        commentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
        },
        createdAt: {
        type: Date,
        default: Date.now
        }
    }
]

}, { timestamps: true });

const Complaint = mongoose.model('Complaint', complaintSchema);

module.exports = Complaint;