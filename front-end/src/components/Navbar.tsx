import { NavLink } from "react-router-dom";
import { LinkObject } from "../utils/types/general";
import { Button } from "./Button";

import { GiOpenBook } from "react-icons/gi";

const navbarLink: LinkObject[] = [
  { to: "/", page: "Home" },
  { to: "test", page: "test" },
  { to: "test", page: "test" },
  { to: "test", page: "test" },
  { to: "test", page: "test" },
];

export function Navbar(): JSX.Element {
  return (
    <nav className="flex-h-between navbar">
      <div className="flex navbar-link-container navbar-link-gap">
        {navbarLink.map((link, index) => (
          <div key={index} className="flex navbar-link-gap">
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? "current-page" : "unselected-page"
              }
            >
              {link.page}
            </NavLink>
            {index !== navbarLink.length - 1 && (
              <div className="navbar-line"></div>
            )}
          </div>
        ))}
      </div>
      <Button
        style="navbar-button"
        content="Personaggi"
        onClick={() => {
          return;
        }}
        Icon={GiOpenBook}
      />
    </nav>
  );
}
