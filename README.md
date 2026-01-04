# Fiverr Clone (Learning Project)

A full-stack **Fiverr-style marketplace clone** built for learning and practice.

This project is developed collaboratively by a small team and focuses on:
- Clean frontend architecture
- Proper backend API structure
- MongoDB Atlas integration
- Secure handling of environment variables
- Real-world development workflow

> ⚠️ This is **not** a production system.  
> It is a **self-learning / educational project**.

---

## 🧱 Tech Stack

### Frontend
- React (Vite)
- React Router
- Redux Toolkit
- CSS (no CSS-in-JS)
- Grid-first layout approach
- Swiper (for galleries / sliders)

### Backend
- Node.js
- Express
- MongoDB (Atlas)
- Native MongoDB driver (not Mongoose)
- Cookie-based auth (planned)
- REST API structure

---

## 📁 Project Structure

```
fiverr-clone/
│
├── Frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── store/
│   │   └── styles/
│   └── package.json
│
├── Backend/
│   ├── api/
│   ├── services/
│   ├── middlewares/
│   ├── config/
│   └── server.js
│
├── .gitignore
└── README.md
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/Proudjew12/fiverr-clone.git
cd fiverr-clone
```

### 2️⃣ Frontend setup
```bash
cd Frontend
npm install
npm run dev
```

Frontend runs on:
```
http://localhost:5173
```

### 3️⃣ Backend setup
```bash
cd Backend
npm install
npm run dev
```

Backend runs on:
```
http://localhost:3030
```

---

## 🔐 Environment Variables

⚠️ Environment files are **NOT included** in the repository.

Create a `.env` file inside `Backend/`:

```env
NODE_ENV=development
DB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/
DB_NAME=fiverr_shared
CORS_ORIGINS=http://localhost:5173,http://127.0.0.1:5173
```

Only project collaborators receive the real `.env` values.

---

## 🧠 MongoDB Atlas & Collaboration

- The project uses **MongoDB Atlas** (shared cloud database)
- Core collaborators have **full read/write access**
- Public users **never** get DB credentials
- Frontend users only see data exposed by the backend API
- MongoDB Compass can be used locally by collaborators for inspection

---

## 🔄 Development Workflow

- Frontend and Backend run separately
- Communication via REST API
- Redux handles global state on the frontend
- Services layer abstracts API calls
- Filters, search, and pagination are handled server-side

---

## 🧪 Status

- ✅ Project structure complete
- ✅ MongoDB Atlas connected
- ✅ Frontend + Backend running locally
- 🚧 Features under active development

---

## 👥 Team Collaboration

This repository supports:
- Multiple developers
- Shared database (Atlas)
- GitHub collaboration
- Clean separation of secrets

---

## 📜 License

This project is for **educational purposes only**.  
No commercial use intended.

---

## ✨ Notes

If you are **not a collaborator**, you can:
- Clone the repo
- Run the frontend
- Explore the UI

You **cannot**:
- Access the database
- Modify backend data
- Deploy backend services

Happy coding 🚀
