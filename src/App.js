import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import LandingPage from "./pages/LandingPage";
import SecondLandingPage from "./pages/SecondLandingPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/landing-second" element={<SecondLandingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
