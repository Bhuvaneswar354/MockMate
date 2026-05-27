import { BrowserRouter, Routes, Route } from "react-router-dom";
import Room from "./pages/Room";
import ResumeInterview from "./pages/ResumeInterview";
import Interviews from "./pages/Interviews";
import Analytics from "./pages/Analytics";
import ProtectedRoute from "./Components/ProtectedRoute";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
function App() {

  return (

    <BrowserRouter>

      <Routes><Route path="/interviews" element={<Interviews />} />
        <Route
  path="/resume-interview"
  element={<ResumeInterview />}
/>
<Route path="/analytics" element={<Analytics />} />
<Route path="/settings" element={<Settings />} />

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
<Route
  path="/room/:roomId"
  element={<Room />}
/>
      </Routes>

    </BrowserRouter>

  );

}

export default App;
