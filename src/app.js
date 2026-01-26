const express = require('express');
const cors = require('cors');

const app = express();


app.use(cors());
app.use(express.json());
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');
const complaintRoutes = require('./routes/complaint.routes');
const errorHandler = require('./middlewares/error.middleware');



app.get('/health', (req, res) => {
    res.json({ status: 'OK' });
});

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/complaints', complaintRoutes);
app.use(errorHandler);

module.exports = app;