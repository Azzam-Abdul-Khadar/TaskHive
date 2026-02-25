# 🚀 TaskHive – Smart Task Management App

<p align="center">
  <a href="https://www.mongodb.com/mern-stack" target="_blank">
    <img src="https://img.shields.io/badge/MERN-Stack-green" />
  </a>

  <a href="https://react.dev/" target="_blank">
    <img src="https://img.shields.io/badge/React-Frontend-blue" />
  </a>

  <a href="https://nodejs.org/en/docs" target="_blank">
    <img src="https://img.shields.io/badge/Node.js-Backend-brightgreen" />
  </a>

  <a href="https://www.mongodb.com/docs/" target="_blank">
    <img src="https://img.shields.io/badge/MongoDB-Database-green" />
  </a>

  <a href="https://jwt.io/introduction" target="_blank">
    <img src="https://img.shields.io/badge/JWT-Authentication-orange" />
  </a>
</p>

A full-stack **Task Management Web Application** built using the MERN stack.  
TaskHive helps users efficiently create, manage, and organize tasks with secure authentication and a responsive UI.

---

## 🌍 Live Demo

> 🚧 Coming Soon (Deploying on Render/Vercel)

---

## 🧠 What is TaskHive?

TaskHive is a simple task manager where users can:
- Register & login securely
- Create, update, and delete tasks
- Set deadlines and priorities
- Manage tasks with a clean UI  
It uses JWT authentication and a REST API backend to handle all task operations.

---

## 🏗️ Architecture Overview

TaskHive is a full-stack JavaScript application built using the MERN stack.

### 🔹 Backend Architecture
- Follows MVC pattern (Model–Controller structure)
- RESTful API design using Express.js
- JWT-based authentication middleware
- MongoDB with Mongoose ODM

### 🔹 Frontend Architecture
- Component-based React architecture
- State management using Redux
- API communication using Axios

### 🔄 Application Flow

Frontend (React)  
⬇ API Calls (Axios)  
Backend (Express.js)  
⬇  
MongoDB Database 

---

## 📸 UI Pics

### 📝 Notes Screen
![Notes Page](./screenshots/notes-page.png)

### 📅 Events Calendar Screen
![Events Page](./screenshots/events-page.png)

### 📋 Enquiry Management Screen
![Enquiry Page](./screenshots/enquiry-page.png)

---

## ✨ Key Features

- 🔐 Secure User Authentication (JWT)
- 📝 Full CRUD Operations for Tasks
- 📅 Task Deadlines & Status Management
- 📱 Fully Responsive Design
- 🌐 RESTful API Architecture
- ⚡ Fast Development with Vite
- 🎨 Modern UI with Tailwind CSS

---

## 🛠️ Tech Stack
 
### Frontend
- React 19 (UI framework)
- Vite (build tool & dev server)
- Redux Toolkit (state management)
- React Router (routing)
- Ant Design & Bootstrap (UI components)
- Axios (API calls)

### Backend
- Node.js
- Express.js (server)
- JWT Authentication

### Database
- MongoDB with Mongoose

---

## 📂 Project Structure

```bash
TaskHive/
│
├── backend/
│   ├── controller/
│   ├── model/
│   ├── route/
│   └── index.js
│
├── client/
│   ├── src/
│   │   ├── components/
│   │   └── App.jsx
│
└── README.md
```
---

## 📚 API Endpoints

| Type   | Route                | Description       |
| ------ | -------------------- | ----------------- |
| POST   | `/api/auth/register` | Register new user |
| POST   | `/api/auth/login`    | Login user        |
| GET    | `/api/tasks`         | Get all tasks     |
| POST   | `/api/tasks`         | Create a new task |
| PUT    | `/api/tasks/:id`     | Update a task     |
| DELETE | `/api/tasks/:id`     | Delete a task     |

---

## 📦 Installation (Run Locally)

To run this project locally, follow these steps:

### 1️⃣ Clone the repo
```bash
git clone https://github.com/Azzam-Abdul-Khadar/TaskHive.git
cd TaskHive

## Install Dependencies

## Backend
cd backend
npm install

## Frontend
cd client
npm install

## Configure Environment Variables

Create a .env file in the backend folder and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key

## Start the App

Backend:
npm run backend:dev (cd backend && nodemon index.js)

Frontend:
npm run frontend:dev (cd client && npm run dev)

After running both servers, open: http://localhost:5173
to view the app in your browser.

```

---

## 💡 What I Learned

While building TaskHive, I gained hands-on experience with:

✨ React component structure and state management
✨ Building REST APIs using Node.js and Express
✨ Connecting backend with MongoDB using Mongoose
✨ Implementing JWT authentication and secure login flows
✨ Using Tailwind CSS for responsive design
✨ Managing async API requests with Axios
✨ Project structure and folder organization

---

## 🔮 Future Improvements

- 🌐 Deploy backend using MongoDB Atlas
- 🔐 Enhance security using bcrypt password hashing
- 👤 Add user profile management
- 🎨 Improve UI with smooth animations
- 🤖 Explore AI-powered task suggestions

---

## 🤝🏻 Contributing

Contributions are welcome!

Fork the repo

Create a new branch

git checkout -b feature/YourFeature

Commit your changes

Push and open a PR

---

### ⭐ Leave a Star

If you found this project helpful — ⭐ Star it on GitHub!

---

### 📄 License

This project is open-source — add the license you prefer here.

---
