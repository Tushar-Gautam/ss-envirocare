import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="">Home</li>
        <li>About</li>
        <li>Mission & Vision</li>
        <li>Services</li>
        <li>Products</li>
      </ul>
      <button className="button-style" role="button">
        Contact us
      </button>
    </nav>
  );
};
export default Navbar;
