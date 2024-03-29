import { NavLink } from "react-router-dom";

function Header() {
  const activeTab = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616",
  };

  return (
    <header>
      <NavLink className="site-logo" to="/">
        #VanLife
      </NavLink>
      <nav>
        <NavLink
          to="host"
          style={({ isActive }) => (isActive ? activeTab : null)}
        >
          Host
        </NavLink>
        <NavLink
          to="about"
          style={({ isActive }) => (isActive ? activeTab : null)}
        >
          About
        </NavLink>
        <NavLink
          to="vans"
          style={({ isActive }) => (isActive ? activeTab : null)}
        >
          Vans
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
