# ✅ TaskNest – Task Management App

TaskNest is a responsive task management web app built with **React**, **React Router**, and **Bootstrap**. It allows users to register, log in, and navigate through a personalized dashboard, profile page, and a task creation form. Authenticated routes are designed with JWT and form validation is enforced with Joi.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Register and login functionality with Joi validation
  - JWT token stored and decoded from localStorage

- 📊 **Dashboard**
  - Displays total, completed, and pending tasks (static counters for now)

- ✅ **Task Creation**
  - Add new tasks with title, description, and status selector
  - Task form UI designed and connected to state

- 👤 **User Profile Page**
  - Displays user name and email fields (currently static)

- 🧭 **Sidebar Navigation**
  - Responsive, styled sidebar using Font Awesome icons and Bootstrap

---

## 🛠️ Tech Stack

- React + React Router
- Bootstrap 5
- Font Awesome
- Axios
- Joi for validation
- JWT for authentication
- LocalStorage for auth token (tasks logic pending)

---

## 🧪 Installation & Running

1. **Clone the repository**

```bash
git clone https://github.com/your-username/tasknest.git
cd tasknest
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the app**

```bash
npm run dev
```

> The app will open at `http://localhost:5173`

---

## ✅ Future Improvements / Todo

The current app is a strong starting point with authentication and UI structure in place. These features are planned for future versions:

- 💾 Store created tasks in localStorage or backend (currently only stored in state)
- 📝 Display task list dynamically on the dashboard with filters (e.g., by status)
- 👤 Load user profile data (name & email) from decoded JWT token
- 🔒 Add route protection to prevent access without login (e.g., redirect unauthenticated users to `/login`)
- ✏️ Make the "Edit Profile" button functional
- 🧹 Improve form UX: show inline validation and cleaner error messages
- 🧭 Add logout functionality that clears localStorage and redirects to login
- 📈 Implement task completion toggles and progress tracking

---

## 📁 Folder Structure

```
src/
├── Components/
│   ├── Login/
│   ├── SignUp/
│   ├── Dashboard/
│   ├── Tasks/
│   ├── Profile/
│   ├── Navbar/
│   ├── Layout/
│   └── BlankLayout/
├── App.jsx
├── App.css
└── main.jsx
```

---

## 🙋‍♂️ Author

Developed by **[Your Name]**

- GitHub: [@your-username](https://github.com/your-username)

---

## 📄 License

This project is licensed under the MIT License.