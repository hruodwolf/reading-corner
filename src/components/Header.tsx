import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li><Link to="/reading-corner/books">Books</Link></li>
          <li><Link to="/reading-corner/remiders">Reminders</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
