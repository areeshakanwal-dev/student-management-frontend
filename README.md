# 🎓 Student Management System - Frontend

## 📚 Overview
A modern, responsive frontend for the Student Management System built with React.js. Features authentication, student CRUD operations, and a beautiful dashboard with statistics.

## 🚀 Live Demo
- **Frontend:** https://student-management-frontend.vercel.app
- **Backend API:** https://student-management-backend-chi-indol.vercel.app

## ✨ Features

### 🔐 Authentication
- User Registration
- User Login
- JWT Token Storage
- Protected Routes
- Logout Functionality

### 📊 Dashboard
- Welcome Message with User Name
- Statistics Cards (Total, Active, Graduated, Inactive Students)
- Quick Actions (Add Student, View All Students)

### 👨‍🎓 Student Management
- Add New Students
- View All Students in Table
- Edit Student Details
- Update Student Status (Active, Inactive, Graduated)
- Delete Students
- Search and Filter Students

### 🎨 Design Features
- Modern UI with Glassmorphism Effects
- Fully Responsive Design
- Dark/Light Mode Toggle
- Smooth Animations
- Professional Color Scheme

## 🛠️ Technologies Used
- **React.js** - UI Framework
- **React Router** - Navigation
- **Axios** - API Calls
- **Context API** - State Management
- **CSS3** - Styling with Animations

## 📋 Pages

| Page | Route | Description |
|------|-------|-------------|
| Landing | `/` | Welcome page with hero section |
| Login | `/login` | User login form |
| Register | `/register` | New user registration |
| Dashboard | `/dashboard` | Stats and quick actions |
| Students | `/students` | Full student management |

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/areeshakanwal-dev/student-management-frontend.git

# Navigate to project directory
cd student-management-frontend

# Install dependencies
npm install

# Start development server
npm start

Environment Variables:
REACT_APP_API_URL=https://student-management-backend-chi-indol.vercel.app/api

student-management-frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.js
│   │   │   ├── Footer.js
│   │   │   └── LoadingSpinner.js
│   │   └── students/
│   │       ├── StudentForm.js
│   │       ├── StudentList.js
│   │       ├── StudentCard.js
│   │       └── EditStudentModal.js
│   ├── pages/
│   │   ├── Landing.js
│   │   ├── Login.js
│   │   ├── Register.js
│   │   ├── Dashboard.js
│   │   └── Students.js
│   ├── context/
│   │   └── AuthContext.js
│   ├── services/
│   │   └── api.js
│   ├── styles/
│   │   └── App.css
│   ├── App.js
│   └── index.js
├── public/
├── package.json
└── README.md


## 🔗 API Integration

The frontend communicates with the backend API:

| Method | Endpoint | Description | Auth |
|--------|----------|-------------|------|
| POST | `/api/auth/register` | Register new user | No |
| POST | `/api/auth/login` | Login user | No |
| GET | `/api/students` | Get all students | Yes |
| POST | `/api/students` | Add new student | Yes |
| PUT | `/api/students/:id` | Update student | Yes |
| DELETE | `/api/students/:id` | Delete student | Yes |

## 🙏 Acknowledgments
- React.js Team
- Vercel for Hosting
- MongoDB Atlas for Database


## 📝 License

This project is for educational purposes as part of the internship program.

---

**Built with ❤️ using React.js**
