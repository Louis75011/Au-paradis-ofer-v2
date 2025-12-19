// apps\web\src\components\layout\MobileMenu.jsx
export default function MobileMenu() {
  const go = (key) => (e) => {
    e.preventDefault();
    window.navigateTo?.(key);
    window.closeMobileMenu?.();
  };

  return (
    <div className="mobile-menu" id="mobileMenu">
      <ul>
        <li><a href="#apropos" onClick={go("apropos")}>À propos</a></li>
        <li><a href="#chevaux" onClick={go("chevaux")}>Nos chevaux</a></li>
        <li><a href="#installations" onClick={go("installations")}>Nos installations</a></li>
        <li><a href="#seances" onClick={go("seances")}>Séances</a></li>
        <li><a href="#gites" onClick={go("gites")}>Gîtes</a></li>
        <li><a href="#faq" onClick={go("faq")}>FAQ</a></li>
        <li><a href="#contact" onClick={go("contact")}>Contact</a></li>
      </ul>
    </div>
  );
}
