import { Link } from "react-router-dom";

const Header = () => (
  <header className="bg-red-600 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold">VG</Link>
      <nav>
        <ul className="flex space-x-4">
          <li><Link to="/">OL 2024</Link></li>
          <li><Link to="/">VG Live</Link></li>
          <li><Link to="/">VGTV</Link></li>
          <li><Link to="/">VG+</Link></li>
          <li><Link to="/">TV-guide</Link></li>
          <li><Link to="/">Tips oss</Link></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
