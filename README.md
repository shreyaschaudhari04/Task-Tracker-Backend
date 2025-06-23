# Task Tracker Backend

🌟 **Task Tracker Backend** is a secure REST API built with **NestJS** and **MongoDB Atlas**.  
It powers the Task Tracker app, supporting user authentication and task management.

---

## 🚀 Features

✅ **User Authentication**
- JWT-based login and signup
- Secure password hashing

✅ **Task Management**
- Fetch tasks for authenticated users
- Add new tasks (CRUD operations)

✅ **Security**
- JWT Authentication
- CORS support
- HTTPS (enforced by hosting provider)

✅ **Deployment-ready**
- Designed for **Railway.app** or **Render.com**

---

## 🛠 Tech Stack

- **NestJS**
- **MongoDB Atlas**
- **Mongoose**
- **JWT / Passport.js**
- **Bcrypt (for password hashing)**

---

## ⚙️ Setup Instructions

### Clone the repo
```bash
git clone https://github.com/your-username/your-backend-repo.git
cd your-backend-repo
```

### Install dependencies
```bash
npm install
```

### Set up environment variables
Create a .env file in the root directory:
```bash
MONGO_URI=your-mongodb-atlas-uri
JWT_SECRET=your-very-secret-key
PORT=3333
```

### Run the app locally
```bash
npm run start:dev
```

## 📂 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST   | `/auth/signup` | Register a new user |
| POST   | `/auth/login`  | Log in and receive JWT |
| GET    | `/tasks`       | Fetch tasks (requires auth) |
| POST   | `/tasks`       | Add new task (requires auth) |

---

## 🌐 Deployment

✅ This backend is designed to be deployed on:

- [Railway.app](https://railway.app)
- [Render.com](https://render.com)

Push your repo to GitHub and link it to your Railway/Render project for auto-deploy.

---

## 🔒 Security Measures

- **JWT Authentication** for secure sessions  
- **Argon2 hashing** for passwords  
- **CORS** configured for trusted origins  
- **HTTPS** (via hosting provider)


