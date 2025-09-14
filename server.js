const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors({
  origin: [
    'https://yourdomain.com',           // Replace with your GoDaddy domain
    'https://www.yourdomain.com',       // Replace with your GoDaddy domain
    'http://localhost:3000',            // For local testing
    'http://127.0.0.1:3000'            // For local testing
  ],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// MongoDB Connection (Optional - remove if not using database)
if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));
}

// Email transporter setup
const transporter = nodemailer.createTransporter({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Test route
app.get('/', (req, res) => {
  res.json({ 
    message: 'Tridev Travel Agency API is running!', 
    timestamp: new Date().toISOString() 
  });
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;
    
    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'Name, email, and message are required' 
      });
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: `New Contact Form: ${subject || 'General Inquiry'}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject || 'General Inquiry'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting Tridev Travel Agency',
      html: `
        <h2>Thank you for your inquiry!</h2>
        <p>Hi ${name},</p>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p><strong>Your message:</strong></p>
        <p>${message}</p>
        <br>
        <p>Best regards,<br>Tridev Travel Agency Team</p>
        <p>📞 +91-8800778189 | +91-9634347223</p>
        <p>📧 tridevtravelagencyy@gmail.com</p>
      `
    };

    // Send emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.json({ 
      status: 'success', 
      message: 'Message sent successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to send message. Please try again.' 
    });
  }
});

// Taxi booking endpoint
app.post('/api/taxi', async (req, res) => {
  try {
    const { pickup, drop, date, time, passengers, name, email, phone } = req.body;
    
    // Validate required fields
    if (!pickup || !drop || !date || !time || !passengers) {
      return res.status(400).json({ 
        status: 'error', 
        message: 'All booking details are required' 
      });
    }

    // Email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: 'New Taxi Booking Request',
      html: `
        <h2>New Taxi Booking</h2>
        <p><strong>Pickup:</strong> ${pickup}</p>
        <p><strong>Drop:</strong> ${drop}</p>
        <p><strong>Date:</strong> ${date}</p>
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Passengers:</strong> ${passengers}</p>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      `
    };

    await transporter.sendMail(adminMailOptions);

    // Send confirmation if email provided
    if (email) {
      const userMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Taxi Booking Confirmation - Tridev Travel Agency',
        html: `
          <h2>Taxi Booking Confirmation</h2>
          <p>Hi ${name || 'Customer'},</p>
          <p>Your taxi booking has been received. Here are the details:</p>
          <p><strong>Pickup:</strong> ${pickup}</p>
          <p><strong>Drop:</strong> ${drop}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Time:</strong> ${time}</p>
          <p><strong>Passengers:</strong> ${passengers}</p>
          <p>We will contact you shortly to confirm the booking.</p>
          <br>
          <p>Best regards,<br>Tridev Travel Agency Team</p>
        `
      };
      await transporter.sendMail(userMailOptions);
    }

    res.json({ 
      status: 'success', 
      message: 'Taxi booking submitted successfully! We will contact you soon.' 
    });

  } catch (error) {
    console.error('Taxi booking error:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to submit booking. Please try again.' 
    });
  }
});

// Quick inquiry endpoint
app.post('/api/inquiry', async (req, res) => {
  try {
    const { destination, travelDate, travelers, name, email, phone } = req.body;
    
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER,
      subject: 'New Travel Inquiry',
      html: `
        <h2>New Travel Inquiry</h2>
        <p><strong>Destination:</strong> ${destination}</p>
        <p><strong>Travel Date:</strong> ${travelDate}</p>
        <p><strong>Travelers:</strong> ${travelers}</p>
        ${name ? `<p><strong>Name:</strong> ${name}</p>` : ''}
        ${email ? `<p><strong>Email:</strong> ${email}</p>` : ''}
        ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
      `
    };

    await transporter.sendMail(adminMailOptions);

    res.json({ 
      status: 'success', 
      message: 'Inquiry submitted successfully!' 
    });

  } catch (error) {
    console.error('Inquiry error:', error);
    res.status(500).json({ 
      status: 'error', 
      message: 'Failed to submit inquiry.' 
    });
  }
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🌐 API available at: http://localhost:${PORT}`);
});
