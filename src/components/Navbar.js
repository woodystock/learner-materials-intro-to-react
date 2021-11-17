import Link from "./Link";

function NavBar() {
    return (
        <nav className="nav__container">
        <ul className="nav__container ul ul__navbar">
          <li><Link label="Home" href="home"/></li>
          <li><Link label="Mews" href="mews"/></li>
          <li><Link label="Contact" href="contact"/></li>
          <li><Link label="About" href="https://www.cats.org.uk/sponsor"/></li>
        </ul>
      </nav>
    )
}

export default NavBar;