// you can start requesting data with useQuery Hook

import { AddGame } from "./components/AddGame";
import { DisplayGames } from "./components/DisplayGames";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider } from "./contexts/AuthProvider";

export default function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/game"
            element={
              <div>
                <h1>Games</h1>
                <AddGame /> <DisplayGames />
              </div>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}
