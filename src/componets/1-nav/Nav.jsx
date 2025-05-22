import { useState } from "react";
import "./nav.css";
import { AlignRight, X } from "lucide-react";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <a href="#">
            IT<span>Ahmed</span>
          </a>
        </div>
        <div className="nav__menu__btn">
          {open ? (
            <X
              onClick={() => {
                setOpen(false);
              }}
            />
          ) : (
            <AlignRight
              onClick={() => {
                setOpen(true);
              }}
            />
          )}
        </div>
      </div>

      <ul className={`nav__links  ${open ? "open" : ""}`}>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="nav__btns"></div>
    </nav>
  );
};

export default Nav;
