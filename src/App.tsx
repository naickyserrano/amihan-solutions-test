import { Routes, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LoginPage from "./containers/LoginPage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import ProtectedRoute from "./components/Routes/PrivateRoute";
import PublicRoute from "./components/Routes/PublicRoute";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectedRoute redirectPath="/login">
            <HomePage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute redirectPath="/">
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
