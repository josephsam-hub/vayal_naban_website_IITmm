# Autonomous Agriculture Robot - Frontend

React-based frontend application for the Autonomous Agriculture & Warehouse Robot System.

## Features

- **Home Page**: Project overview, system workflow, and applications
- **Product Page**: Hardware components and troubleshooting guide  
- **Contact Page**: Contact form with backend integration
- **Responsive Design**: Professional UI suitable for engineering projects

## Tech Stack

- React 18
- Vite
- Tailwind CSS
- React Router DOM
- Axios

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

## API Integration

The frontend communicates with the backend API at `http://localhost:5000` for contact form submissions.

## Project Structure

```
src/
├── components/
│   └── Navbar.jsx
├── pages/
│   ├── Home.jsx
│   ├── Product.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```