import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        Lost&Found
      </div>

      <div className="nav-right">
        <Link to="/">Dashboard</Link>
        <Link to="/add-lost">Add Lost</Link>
        <Link to="/add-found">Add Found</Link>
      </div>
    </nav>
  );
}
