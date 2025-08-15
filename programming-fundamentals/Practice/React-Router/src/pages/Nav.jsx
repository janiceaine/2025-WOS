import { NavLink } from "react-router";


function Nav() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-primary fixed-top">
        <ul>
          <li className="">
            <strong>Gizmos, Inc.</strong>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/" end>Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
export default Nav;
