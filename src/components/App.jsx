import SignupPage from "./SignupPage/SignupPage";
import LoginPage from "./LoginPage/LoginPage";
import Homepage from "./Homepage/Homepage";
import ForgotPassword from "./ForgotPassword/ForgotPassword"
import Profile from "./Profile/Profile";
import EditProfile from "./Profile/EditProfile";
import app from "../firebase";
import { Routes, Route } from "react-router-dom";
import { AuthProvider } from "../contexts/AuthContext";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignupPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route
            path="/home"
            element={
              <PrivateRoute>
                <Homepage />
              </PrivateRoute>
            }
          />
          <Route path="profile" element={<Profile />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="/update-profile" element={<EditProfile />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
