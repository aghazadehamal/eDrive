import React from "react";

import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FirstPage from "./FirstPage/FirstPage";
import Quiz from "./FirstPage/Quiz";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import LoginFormAdmin from "./components/LoginFormAdmin";
import { AuthProvider } from "./contexts/AuthContext";

import LoginForm from "./registration/LoginForm";
import RegistrationForm from "./registration/RegistrationForm";
import RegisterForm from "./registration/RegisterForm";
import UserProfile from "./UserProfile/UserProfile";
import User from "./components/AdminPanel";
import ProfileCard from "./UserProfile/EditUserProfile";
import ProtectedRoute from "./routes/ProtectedRoute";
import LessonData from "./LandingPage/LessonData";
import UserListTwo from "./LandingPage/UserListTwo";
import Parol from "./registration/Parol";
import ParolTwo from "./registration/ParolTwo";
import VideoQuiz from './LandingPage/VideoQuiz';
import FirstPageTwo from './FirstPage/FirstPageTwo';
import UserDetails from './LandingPage/UserDetails';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<FirstPage />} />
            <Route path="/RegistrationForm" element={<RegistrationForm />} />
            <Route path="/LoginForm" element={<LoginForm />} />

            <Route path="/Quiz" element={<ProtectedRoute component={Quiz} />} />
            <Route
              path="/RegisterForm"
              element={<ProtectedRoute component={RegisterForm} />}
            />
            <Route
              path="/profileCard"
              element={<ProtectedRoute component={ProfileCard} />}
            />
            <Route
              path="/user-profile"
              element={<ProtectedRoute component={UserProfile} />}
            />
            <Route
              path="/admin"
              element={<ProtectedRoute component={User} />}
            />
            <Route path="/loginFormAdmin" element={<LoginFormAdmin />} />

            <Route
              path="/lessonData"
              element={<ProtectedRoute component={LessonData} />}
            />
            <Route path="/UserListTwo" element={<UserListTwo />} />

            <Route path="/Parol" element={<Parol />} />
            <Route path="/ParolTwo" element={<ParolTwo />} />
            <Route path="/VideoQuiz" element={<VideoQuiz />} />
            <Route path="/firstPageTwo" element={<FirstPageTwo />} />
            <Route path="/userDetails" element={<UserDetails />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
