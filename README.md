# 🎵 Music Streaming API

A RESTful backend API for a music streaming platform built with **Node.js, Express.js, MongoDB, and ImageKit**.

The project focuses on building a secure and scalable backend for a real-world music streaming platform.

---

## 🚀 Features

- 🔐 Authentication with JWT & bcrypt
- 👥 Role-Based Access Control (RBAC)
- 🎤 Only Artists Can Upload Music
- ☁️ Music Upload on ImageKit Cloud Storage
- 📁 File Upload using Multer
- 🍪 Cookie-Based Authentication
- 🗄️ MongoDB Database Integration
- 🛡️ Protected Routes
- 🌐 RESTful API
- ⚡ Express.js Backend

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt
- cookie-parser
- Multer
- ImageKit

---

## 📁 Project Structure

```text
music-streaming-api/
├── src/
│   ├── controllers/
│   │   ├── music.controller.js
│   │   └── user.controller.js
│   ├── db/
│   │   └── db.js
│   ├── models/
│   │   ├── album.model.js
│   │   ├── music.model.js
│   │   └── user.model.js
│   ├── routes/
│   │   ├── music.routes.js
│   │   └── user.routes.js
│   ├── services/
│   │   └── storage.service.js
│   └── app.js
├── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
---

## ⚙️ Installation

```bash
git clone https://github.com/Vaibhavvi/music-streaming-api.git

cd music-streaming-api

npm install

npm run dev
```

---

## 🔐 Authentication & Authorization

The API uses **JWT-based authentication** with cookies.

### Authentication

- [x] User Registration
- [x] User Login
- [x] Password Hashing with bcrypt
- [x] JWT Token Generation
- [x] Cookie-Based Authentication

### Authorization

- [x] Role-Based Access Control (RBAC)
- [x] Protected Routes
- [x] Artist Role Verification
- [x] Only Artists Can Upload Music

---

## 🎤 Artist Features

### ✅ Completed

- [x] Artist Registration
- [x] Artist Login
- [x] Artist Authentication
- [x] Artist Authorization
- [x] Upload Music
- [x] Music Upload to ImageKit Cloud Storage
- [x] Store Music URL in MongoDB
- [x] Create Album
- [x] Get Album
- [x] Get Music

### 🚧 Coming Soon

- [ ] Create Album
- [ ] Manage Albums
- [ ] Update Music
- [ ] Delete Music
- [ ] Get Artist's Music
- [ ] Manage Artist Profile

---

## 🎧 Listener Features

### 🚧 Coming Soon

- [ ] Browse Music
- [ ] Listen / Stream Music
- [ ] Search Songs
- [ ] Filter Music
- [ ] Explore Artists
- [ ] Explore Albums
- [ ] Create Playlists
- [ ] Manage Playlists

---

## ☁️ Cloud Storage

Music files are uploaded to **ImageKit Cloud Storage**.

The uploaded file URL is then stored in MongoDB and will be used for future music streaming.

### Upload Flow

```text
Client
   ↓
Express API
   ↓
Multer
   ↓
ImageKit Cloud Storage
   ↓
Music URL
   ↓
MongoDB
```

---

## 📌 Project Status

🚧 **Currently in Development**

### ✅ Completed

- [x] Project Initialization
- [x] Express.js Setup
- [x] MongoDB Database Connection
- [x] User Model
- [x] Authentication
- [x] JWT Authentication
- [x] bcrypt Password Hashing
- [x] Cookie Authentication
- [x] Role-Based Access Control
- [x] Authorization
- [x] Protected Routes
- [x] Music Model
- [x] Artist-Only Music Upload
- [x] Multer File Upload
- [x] ImageKit Cloud Storage Integration
- [x] Music URL Storage in MongoDB
- [x] Create Album
- [x] Get Album
- [x] Get Music

### 🚧 Coming Soon

- [ ] User Can Listen / Stream Music
- [ ] Artist Can Create Albums
- [ ] Album Management
- [ ] Update Music
- [ ] Delete Music
- [ ] Browse Music
- [ ] Search & Filtering
- [ ] Playlist System
- [ ] Listener Features
- [ ] More Music Management Features

---

## 🎯 Project Goal

The goal of this project is to build a real-world music streaming backend while improving practical knowledge of:

- Backend Development
- REST API Design
- Authentication & Authorization
- Role-Based Access Control
- Database Management
- Middleware
- CRUD Operations
- File Handling
- Cloud Storage
- API Security
- MVC Architecture
- Git & GitHub

---

## 👨‍💻 Author

**Vaibhav Dubey**

GitHub: https://github.com/Vaibhavvi

---

⭐ Star this repository if you find it useful!

Built with ❤️ using Node.js, Express.js, MongoDB & ImageKit 🎵
