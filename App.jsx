import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddLost from "./pages/AddLost";
import AddFound from "./pages/AddFound";
import EditLost from "./pages/EditLost";
import EditFound from "./pages/EditFound";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-lost" element={<AddLost />} />
          <Route path="/add-found" element={<AddFound />} />
          <Route path="/edit-lost/:index" element={<EditLost />} />
          <Route path="/edit-found/:index" element={<EditFound />} />
        </Routes>
      </div>
    </Router>
  );
}
