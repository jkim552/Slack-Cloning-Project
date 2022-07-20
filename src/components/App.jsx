import SignupPage from "./SignupPage/SignupPage";
import LoginPage from './LoginPage/LoginPage'
import Homepage from "./Homepage/Homepage";
import Profile from "./Profile/Profile";
import EditProfile from "./Profile/EditProfile";
import app from '../firebase'
import { Routes, Route } from "react-router-dom"
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/update-profile" element={<EditProfile />} />
          <Route path="/" element={<SignupPage />} />
          <Route path="/home" element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
