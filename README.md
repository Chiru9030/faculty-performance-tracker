# Faculty Tracker & Locator System 🎓📍

An end-to-end academic portal for university faculty availability tracking, cabin location mapping, and student appointment discovery. Built with a **React** frontend and a **Node.js/Express** + **MongoDB** REST API.

---

## 🌟 Key Features

- **Real-Time Faculty Status:** View current cabin availability (Available, In Class, In Meeting, Out of Office).
- **Interactive Campus Location Mapping:** Locate faculty cabins across campus buildings, floors, and blocks.
- **Faculty Management Portal:** Authenticated dashboard for professors and department chairs to update schedules, office hours, and consultation links.
- **Public Student View:** Fast, unauthenticated directory allowing students to search faculty by department, course, or name.
- **Role-Based Authentication:** Protected administration routes using JSON Web Tokens (JWT).

---

## 🏗 Architecture & Tech Stack

```
faculty-tracker/
├── frontend/                 # React SPA
│   ├── src/
│   │   ├── pages/            # PublicView, Dashboard, Login
│   │   ├── App.js            # Client router & navigation
│   │   └── App.css           # Styling
│   └── package.json
└── backend/                  # Node.js + Express API
    ├── config/db.js          # MongoDB Mongoose connection
    ├── middleware/           # authMiddleware.js (JWT auth)
    ├── models/               # Faculty.js, Location.js
    ├── routes/               # authRoutes.js, facultyRoutes.js, seed.js
    └── server.js             # Express application entrypoint
```

- **Frontend:** React, React Router, Axios, CSS Modules
- **Backend:** Node.js, Express.js, Mongoose ODM
- **Database:** MongoDB Atlas / Local MongoDB
- **Security:** JWT authentication, bcrypt password hashing, CORS

---

## 🚀 Quick Start

### 1. Prerequisites
- [Node.js](https://nodejs.org/) (v16+)
- [MongoDB](https://www.mongodb.com/) (Atlas URI or local `mongodb://localhost:27017`)

---

### 2. Backend Setup
```bash
cd backend

# Install dependencies
npm install

# Setup environment
cp .env.example .env
```
Edit `.env` with your MongoDB credentials:
```env
PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/faculty_finder
JWT_SECRET=your_secret_key
```

Start the backend server:
```bash
node server.js
```
The server will run on `http://localhost:5001`.

---

### 3. Frontend Setup
```bash
cd ../frontend

# Install dependencies
npm install

# Start development server
npm start
```
The React development server will start at `http://localhost:3000`.

---

## 📡 API Endpoints

### Public Directory
- `GET /api/faculty` - List all faculty members and current status
- `GET /api/faculty/:id` - Get specific faculty profile, cabin location, and office hours

### Authentication & Admin
- `POST /api/auth/login` - Admin/faculty login (returns JWT)
- `PUT /api/faculty/status` - Update current status (Available, In Class, etc.)
- `POST /api/faculty/seed` - Database seeding utility

---

## 📄 License
Licensed under the [MIT License](LICENSE).
