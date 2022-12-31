import { React, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../Assets/logo.png";
import './Navbar.scss'
const Nav = [
  {
    Name: "Home",
    path: "/",
  },
  {
    Name: "Movies",
    path: "/movie",
  },
  {
    Name: "Tv Series",
    path: "/tv",
  },
];

function Navbar() {
  const { pathname } = useLocation();
  const navRef = useRef(null);
  const active = Nav.findIndex((e) => e.path === pathname);

  useEffect(() => {
    const topEffect = () => {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        navRef.current.classList.add("hide");
      } else {
        navRef.current.classList.remove("hide");
      }
    };
    window.addEventListener("scroll", topEffect);
    return () => {
      window.removeEventListener("scroll", topEffect);
    };
  }, []);

  return (
    <div ref={navRef} className="header">
      <div className="header__wrap container">
        <div className="logo">
          <Link to="/">
            <img src={Logo} alt="" />
          </Link>
        </div>
      <ul className="header__nav">
        {Nav.map((nav, i) => (
          <li key={i} className={`${i === active ? "active" : ""}`}>
            <Link to={nav.path}>{nav.Name}</Link>
          </li>
        ))}
      </ul>
        </div>
    </div>
  );
}

export default Navbar;
