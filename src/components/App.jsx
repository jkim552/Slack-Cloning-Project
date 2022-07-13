import SignupPage from "./SignupPage/SignupPage";
import LoginPage from './LoginPage/LoginPage'
import app from '../firebase'
import Navbar from "./Navbar/Navbar";
import { Routes, Route } from "react-router-dom"
import Homepage from "./Homepage";
import { AuthProvider } from "../contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Routes>
      </div>
    </AuthProvider>

  );
}

export default App;
