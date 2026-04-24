# TradeLab

![TradeLab Logo](/favicon.svg)

A full-stack trading analysis platform designed to help traders visualize, analyze, and manage their trading activities. TradeLab combines a modern React frontend with a robust Node.js/Express backend to provide a seamless trading experience.

**Live Demo:** [https://tradelab-a8936.web.app/](https://tradelab-a8936.web.app/)

---

## 📋 Table of Contents

- [Features](#features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [API Endpoints](#api-endpoints)
- [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

---

## ✨ Features

- **User Authentication**: Secure signup and login functionality with Firebase
- **Dashboard**: Interactive dashboard for viewing trading data
- **Trade Management**: Create, read, update, and delete trades
- **Advanced Charting**: Lightweight charts for technical analysis using lightweight-charts
- **Responsive Design**: DaisyUI components with Tailwind CSS for a beautiful UI
- **Real-time Updates**: CORS-enabled API for seamless frontend-backend communication
- **Cross-Platform**: Works on desktop and mobile devices

---

## 🛠 Technology Stack

### Frontend
- **React** (v19.2.4) - UI library for building interactive components
- **Vite** (v8.0.4) - Fast build tool and dev server
- **React Router DOM** (v7.14.1) - Client-side routing
- **Tailwind CSS** (v4.2.2) - Utility-first CSS framework
- **DaisyUI** (v5.5.19) - Component library built on Tailwind CSS
- **Lightweight Charts** (v5.1.0) - Professional charting library
- **Firebase** (v12.12.1) - Authentication and backend services
- **Axios** (v1.15.2) - HTTP client for API calls

### Backend
- **Node.js** - JavaScript runtime
- **Express** (v5.2.1) - Web framework
- **MongoDB** - Database (via Mongoose)
- **Mongoose** (v9.5.0) - ODM for MongoDB
- **CORS** (v2.8.6) - Cross-Origin Resource Sharing
- **Dotenv** (v17.4.2) - Environment variable management

---

## 📁 Project Structure

```
TradeLab/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── Components/      # Reusable React components
│   │   │   ├── Login.jsx    # Login component
│   │   │   ├── Signup.jsx   # Signup component
│   │   │   └── Dashboard.jsx # Main dashboard
│   │   ├── Context/         # React context for state management
│   │   │   ├── AuthContext.js
│   │   │   └── AuthProvider.jsx
│   │   ├── Services/        # API service layer
│   │   │   └── api.js       # Axios instance configuration
│   │   ├── Layout/          # Layout components
│   │   │   └── MainLayout.jsx
│   │   ├── App.jsx          # Main app component
│   │   ├── main.jsx         # Entry point
│   │   └── index.css        # Global styles
│   ├── package.json
│   ├── vite.config.js       # Vite configuration
│   └── eslint.config.js     # ESLint configuration
│
├── backend/                  # Node.js/Express backend
│   ├── Router/              # API route definitions
│   │   ├── AuthRouter.js    # Authentication routes
│   │   └── TradeRouter.js   # Trade routes
│   ├── Utils/
│   │   └── DB.js            # MongoDB connection
│   ├── index.js             # Server entry point
│   └── package.json
│
└── .github/                 # GitHub Actions workflows
```

---

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn** package manager
- **MongoDB** (local installation or MongoDB Atlas account)
- **Git**

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Suprio-Das/TradeLab.git
cd TradeLab
```

### 2. Setup Backend

```bash
cd backend
npm install
```

### 3. Setup Frontend

```bash
cd ../frontend
npm install
```

---

## ⚙️ Configuration

### Backend Configuration

Create a `.env` file in the `backend` directory:

```bash
# Database
DB_URI=mongodb://localhost:27017/tradelab
# Or use MongoDB Atlas:
# DB_URI=mongodb+srv://username:password@cluster.mongodb.net/tradelab

# Server
PORT=3000

# Firebase credentials (if needed for backend verification)
# FIREBASE_API_KEY=your_firebase_key
```

### Frontend Configuration

Create a `.env.local` file in the `frontend` directory:

```bash
# API Configuration
VITE_API_URL=http://localhost:3000

# Firebase Configuration
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

---

## 💻 Usage

### Start the Development Server

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Server will run on http://localhost:3000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# Application will run on http://localhost:5173
```

### Build for Production

**Frontend:**
```bash
cd frontend
npm run build
```

**Backend:** 
No build step required; use `npm start` to run the production server.

### Linting

```bash
cd frontend
npm run lint
```

---

## 📡 API Endpoints

### Authentication Routes (`/api/auth`)
- `POST /api/auth/signup` - Create a new user account
- `POST /api/auth/login` - User login
- `POST /api/auth/logout` - User logout

### Trade Routes (`/api/trades`)
- `GET /api/trades` - Get all trades for the authenticated user
- `POST /api/trades` - Create a new trade
- `GET /api/trades/:id` - Get a specific trade
- `PUT /api/trades/:id` - Update a trade
- `DELETE /api/trades/:id` - Delete a trade

---

## 🔐 Authentication

TradeLab uses Firebase for user authentication:

1. Users can sign up with email and password
2. Authentication state is managed via React Context (AuthContext)
3. Protected routes check authentication status before rendering
4. Login/Signup components handle form validation and error handling

---

## 🧠 State Management

The application uses **React Context API** for global state management:

- **AuthContext**: Manages user authentication state
- **AuthProvider**: Wraps the application to provide auth context to all components

---

## 📱 UI Components

The frontend uses **DaisyUI** components styled with **Tailwind CSS** for:
- Responsive navigation
- Form inputs and validation
- Cards and modals
- Buttons and navigation elements

---

## 🔄 Frontend-Backend Communication

The frontend communicates with the backend using **Axios**:

- Base URL configured in `src/Services/api.js`
- CORS enabled on backend for `http://localhost:5173`
- Credentials included in requests for cookie-based sessions

---

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Ensure MongoDB is running locally or check your MongoDB Atlas credentials
- Verify `DB_URI` is correct in the `.env` file

### CORS Errors
- Check that the frontend URL (`http://localhost:5173`) matches the CORS origin in `backend/index.js`
- Ensure credentials are enabled in both axios and CORS configuration

### Port Already in Use
- Backend default: 3000 - Change via `PORT` environment variable
- Frontend default: 5173 - Change via `npm run dev -- --port 3001`

### Firebase Authentication Issues
- Verify Firebase credentials in `.env.local`
- Ensure Firebase project is properly configured
- Check Firebase console for API key restrictions

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch for your feature: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your message here"`
4. Push to the branch: `git push origin feature/your-feature-name`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the ISC License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Suprio Das**
- GitHub: [@Suprio-Das](https://github.com/Suprio-Das)

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - For the powerful UI library
- [Vite](https://vitejs.dev/) - For the lightning-fast build tool
- [Tailwind CSS](https://tailwindcss.com/) - For utility-first styling
- [DaisyUI](https://daisyui.com/) - For beautiful prebuilt components
- [Firebase](https://firebase.google.com/) - For authentication services
- [Lightweight Charts](https://tradingview.github.io/lightweight-charts/) - For professional charting
- [MongoDB](https://www.mongodb.com/) - For database services

---

## 📞 Support

For issues and questions:
- Open an issue on [GitHub Issues](https://github.com/Suprio-Das/TradeLab/issues)
- Check existing documentation and FAQs
- Review the project's code comments for implementation details

---

## 🔗 Links

- **Live Application**: [https://tradelab-a8936.web.app/](https://tradelab-a8936.web.app/)
- **GitHub Repository**: [https://github.com/Suprio-Das/TradeLab](https://github.com/Suprio-Das/TradeLab)

---

**Last Updated**: April 24, 2026
