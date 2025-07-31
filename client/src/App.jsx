import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./containers/login/Login";
import SignUp from "./containers/signup/SignUp";
import Dashboard from "./containers/dashboard/Dashboard";
import MainLayout from "./components/main-layout/MainLayout";
import ProtectedRoute from "./components/protected-route/ProtectedRoute";
import Notes from "./containers/notes/Notes";
import Event from "./containers/event/Event";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route element={<MainLayout />}>
          <Route path="/user" element={<ProtectedRoute />}>
            <Route path="/user/dashboard" element={<Dashboard />} />
            <Route path="/user/notes" element={<Notes />} />
            <Route path="/user/events" element={<Event />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
