import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/lab7">Головна сторінка</Link>
        </li>
        <li>
          <Link to="/lab7/gallery">Галерея товарів</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
