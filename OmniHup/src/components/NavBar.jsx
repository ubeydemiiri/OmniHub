import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        Logo
      </a>
      <ul className="nav-links">
        <li>
          
          <Link to="/">Home</Link>
        </li>
        <li>
          
          <Link to="/service">About</Link>
        </li>
        <li>
          
          <Link to="/contact">Team</Link>
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
