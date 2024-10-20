import { NavLink } from "react-router-dom";

export function Footer(): JSX.Element {
  const links = ["Lorem Ipsum", "Contatti", "Piselo", "Coocole"];

  return (
    <footer className="flex-v-between footer">
      <div className="flex-h-between footer-content">
        <div className="flex-h-between footer-content-start">
          <div className="flex-v-between-h-start footer-about-us">
            <h3>Nido Retold</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex-v-between-h-start footer-links">
            <h3>Link</h3>
            <div className="flex-v-between-h-start footer-links-container">
              {links.map((link) => (
                <NavLink
                  to={link}
                  key={link}
                  className={({ isActive }) =>
                    isActive ? "current-page" : "unselected-page"
                  }
                >
                  {link}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <div className="footer-logos"></div>
      </div>
      <div className="flex-h-center footer-rights">
        <h5>© 2024 Andrea Schiariti. All rights reserved</h5>
      </div>
    </footer>
  );
}
