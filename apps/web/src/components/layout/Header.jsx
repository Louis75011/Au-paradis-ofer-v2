// apps/web/src/components/layout/Header.jsx
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import "../../styles/components/header.scss";

export default function Header() {
  useEffect(() => {
    const burger = document.getElementById("burgerIcon");
    const menu = document.getElementById("mobileMenu");
    if (!burger || !menu) return;

    const toggle = () => {
      const isOpen = menu.classList.toggle("active");
      burger.classList.toggle("active", isOpen);
      burger.setAttribute("aria-expanded", String(isOpen));
    };

    burger.addEventListener("click", toggle);
    return () => burger.removeEventListener("click", toggle);
  }, []);

  const closeMobileMenu = () => {
    const menu = document.getElementById("mobileMenu");
    const burger = document.getElementById("burgerIcon");
    menu?.classList.remove("active");
    burger?.classList.remove("active");
    burger?.setAttribute("aria-expanded", "false");
  };

  return (
    <header>
      <nav>
        <NavLink to="/" onClick={closeMobileMenu}>
          <img
            src="/images/logo-sans-fond.png"
            alt="Logo Au Paradis O'Fer - Centre de zoothérapie équine"
            className="logo"
          />
        </NavLink>

        <ul>
          <li><NavLink to="/apropos">À propos</NavLink></li>
          <li><NavLink to="/chevaux">Nos chevaux</NavLink></li>
          <li><NavLink to="/installations">Nos installations</NavLink></li>
          <li><NavLink to="/seances">Séances</NavLink></li>
          <li><NavLink to="/gites">Gîtes</NavLink></li>
          <li><NavLink to="/faq">FAQ</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>

        <button className="burger-icon" id="burgerIcon" aria-label="Ouvrir le menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <div className="mobile-menu" id="mobileMenu">
        <ul>
          <li><NavLink to="/apropos" onClick={closeMobileMenu}>À propos</NavLink></li>
          <li><NavLink to="/chevaux" onClick={closeMobileMenu}>Nos chevaux</NavLink></li>
          <li><NavLink to="/installations" onClick={closeMobileMenu}>Nos installations</NavLink></li>
          <li><NavLink to="/seances" onClick={closeMobileMenu}>Séances</NavLink></li>
          <li><NavLink to="/gites" onClick={closeMobileMenu}>Gîtes</NavLink></li>
          <li><NavLink to="/faq" onClick={closeMobileMenu}>FAQ</NavLink></li>
          <li><NavLink to="/contact" onClick={closeMobileMenu}>Contact</NavLink></li>
        </ul>
      </div>
    </header>
  );
}
