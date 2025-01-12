import Image from "next/image";
import "./style.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <figure>
        <Image
          src="/logoDark.jpeg"
          alt="ss-envirocare logo"
          width={130}
          height={100}
          priority
        />
      </figure>
      <ul>
        <li className="">Home</li>
        <li>About</li>
        <li>Mission & Vision</li>
        <li>Process</li>
        <li>Products</li>
      </ul>
      <button className="button-style" role="button">
        Contact us
      </button>
    </nav>
  );
};
export default Navbar;
