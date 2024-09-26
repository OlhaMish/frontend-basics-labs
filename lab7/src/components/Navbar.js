import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Головна сторінка</Link>
        </li>
        <li>
          <Link to="/gallery">Галерея товарів</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
