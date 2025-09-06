const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a simple schema and model for storing bookings/contact
const BookingSchema = new mongoose.Schema({
  type: String, // e.g., inquiry, booking, taxi, contact
  data: Object,
  createdAt: { type: Date, default: Date.now }
});

const Booking = mongoose.model('Booking', BookingSchema);

// Email transporter setup (Gmail SMTP)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER, // your gmail
    pass: process.env.EMAIL_PASS  // app password, NOT your gmail password
  }
});

// Helper function to send confirmation email
function sendConfirmationEmail(to, subject, text) {
  return transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject,
    text
  });
}

// API routes
app.post('/api/taxi', async (req, res) => {
  try {
    const booking = new Booking({ type: 'taxi', data: req.body });
    await booking.save();

    if (req.body.email) {
      await sendConfirmationEmail(
        req.body.email,
        'Taxi Booking Confirmation - Tridev Travel',
        `Thank you for booking your taxi with Tridev Travel!\n\nBooking Details:\n${JSON.stringify(req.body, null, 2)}`
      );
    }

    res.json({ success: true, message: 'Taxi booked and confirmation sent!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error while booking taxi.' });
  }
});

// Similarly, add other endpoints for inquiry, booking and contact here...

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
