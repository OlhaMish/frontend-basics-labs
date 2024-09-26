import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Biography</Link>
        </li>
        <li>
          <Link to="/gallery">Goods Gallery</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
