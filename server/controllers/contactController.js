import db from '../config/database.js';
import { sendEmail } from '../config/email.js';
import { validateContact } from '../validators/contactValidator.js';

export const createContact = async (req, res) => {
  try {
    const contactData = validateContact(req.body);

    // Store in database
    const stmt = db.prepare(
      'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)'
    );
    const result = stmt.run(contactData.name, contactData.email, contactData.message);

    // Send email
    await sendEmail(contactData);

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      id: result.lastInsertRowid
    });
  } catch (error) {
    console.error('Contact submission error:', error);
    res.status(400).json({
      success: false,
      message: error.message || 'Failed to submit contact form'
    });
  }
};