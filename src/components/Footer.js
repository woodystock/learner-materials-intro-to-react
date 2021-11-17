import Link from "./Link";
import icon from '../cat.png'

function Footer() {
    return (
        <section className="nav__container footer">
          <ul className="footer__section ul">
            <li><Link label="About" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Belly Rubs" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Donate" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Cat Nip" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Customers" href="https://www.cats.org.uk/sponsor"/></li>
          </ul>
          <ul className="footer__section ul">
            <li><Link label="Resources" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Dogs" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Blog" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="eBooks" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Revenge" href="https://www.cats.org.uk/sponsor"/></li>
          </ul>
          <ul className="footer__section ul">
            <li><Link label="Contact" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Help" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Meow" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Mice" href="https://www.cats.org.uk/sponsor"/></li>
          </ul>
          <ul className="footer__section ul">
            <li><Link label="Ts &amp; Cs" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Privacy Policy" href="https://www.cats.org.uk/sponsor"/></li>
            <li><Link label="Link&copy; 2021 TR Inc." href=""/></li>
            <i><img className="icon" src={icon} alt="A ginger cat silhouette" /></i>
          </ul>
        </section>
    )
}

export default Footer;