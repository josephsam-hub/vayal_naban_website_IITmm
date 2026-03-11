import express from 'express'
import Contact from '../models/Contact.js'

const router = express.Router()

// POST /api/contact - Submit contact form
router.post('/', async (req, res) => {
  try {
    const { name, phone, email, reason, message } = req.body

    // Validate required fields
    if (!name || !phone || !email || !reason || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }

    // Create new contact entry
    const contact = new Contact({
      name,
      phone,
      email,
      reason,
      message
    })

    await contact.save()

    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: contact._id,
        createdAt: contact.createdAt
      }
    })

  } catch (error) {
    console.error('Error submitting contact form:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
})

// GET /api/contact - Get all contact submissions (for admin use)
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 })
    
    res.json({
      success: true,
      data: contacts
    })
  } catch (error) {
    console.error('Error fetching contacts:', error)
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    })
  }
})

export default router