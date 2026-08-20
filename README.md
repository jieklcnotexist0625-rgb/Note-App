# NoteFlow

A full-stack note-taking application where users can register, log in, and manage their personal notes securely.

## Live Demo

🔗 https://note-app-ten-lemon.vercel.app

## Features

- **Landing Page** — Public promotional page for guests
- **User Authentication** — Register and login with JWT-based authentication
- **Dashboard** — Protected area for managing notes
- **CRUD Notes** — Create, read, edit, and delete notes
- **Private Notes** — Users can only view their own notes
- **Responsive Design** — Works on desktop and mobile

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React + Vite + Tailwind CSS |
| Backend | Node.js + Express |
| Database | MongoDB Atlas |
| Authentication | JWT (JSON Web Tokens) + bcrypt |
| Frontend Hosting | Vercel |
| Backend Hosting | Render |

## Project Structure

    Note-App/
    ├── client/               # React frontend
    │   ├── src/
    │   │   ├── components/   # Navbar, NoteCard, NoteModal
    │   │   ├── context/      # AuthContext (authentication state)
    │   │   ├── pages/        # Home, Login, Register, Dashboard
    │   │   ├── App.jsx       # Routing setup
    │   │   └── main.jsx      # Entry point
    │   └── package.json
    ├── server/               # Express backend
    │   ├── middleware/        # Auth middleware (JWT verification)
    │   ├── models/           # User and Note Mongoose models
    │   ├── routes/           # Auth and Notes API routes
    │   ├── index.js          # Server entry point
    │   └── package.json
    └── README.md

## API Endpoints

### Auth

| Method | Endpoint | Description |
|---|---|---|
| POST | /api/auth/register | Register a new user |
| POST | /api/auth/login | Login and receive JWT token |

### Notes (Protected - requires JWT)

| Method | Endpoint | Description |
|---|---|---|
| GET | /api/notes | Get all notes for logged-in user |
| POST | /api/notes | Create a new note |
| PUT | /api/notes/:id | Update a note |
| DELETE | /api/notes/:id | Delete a note |

## Local Development

### Prerequisites

- Node.js (v18+)
- MongoDB Atlas account

### Setup

1. Clone the repository

       git clone https://github.com/jieklcnotexist0625-rgb/Note-App.git
       cd Note-App

2. Install backend dependencies

       cd server
       npm install

3. Create server/.env file with these variables:

       PORT=5000
       MONGODB_URI=your_mongodb_connection_string
       JWT_SECRET=your_secret_key

4. Start the backend

       npm run dev

5. Install frontend dependencies

       cd ../client
       npm install

6. Update API_URL in these two files to http://localhost:5000/api:

   - client/src/context/AuthContext.jsx
   - client/src/pages/Dashboard.jsx

7. Start the frontend

       npm run dev

8. Open http://localhost:5173

## Deployment

- Frontend is deployed on Vercel (https://vercel.com)
- Backend is deployed on Render (https://render.com)
- Database is hosted on MongoDB Atlas (https://www.mongodb.com/atlas)
