# Autonomous Agriculture Robot - Backend

Node.js backend API for the Autonomous Agriculture & Warehouse Robot System.

## Features

- **Contact API**: Handle contact form submissions
- **MongoDB Integration**: Store contact data securely
- **CORS Enabled**: Support cross-origin requests from frontend
- **Environment Configuration**: Secure configuration management

## Tech Stack

- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

## Installation

1. Install dependencies:
```bash
npm install
```

2. Configure environment variables in `.env`:
```
MONGODB_URI=your_mongodb_connection_string
PORT=5000
NODE_ENV=development
```

3. Start development server:
```bash
npm run dev
```

4. Start production server:
```bash
npm start
```

## API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact submissions

### Health Check
- `GET /api/health` - API status check

## Database Schema

### Contact Model
```javascript
{
  name: String (required),
  phone: String (required),
  email: String (required),
  reason: String (required, enum),
  message: String (required),
  createdAt: Date (default: now)
}
```

## Project Structure

```
backend/
├── models/
│   └── Contact.js
├── routes/
│   └── contact.js
├── server.js
├── .env
└── package.json
```