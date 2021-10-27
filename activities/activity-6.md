# Activity 6 - extension exercise

Your React app should have lots of nice, re-usable components 

Fantastic work!

After componentifying (is that a word?) the starter code there might be a few places you've spotted where we could add even more components. Components inside of components even!

One example where we could create more components might be in our Navbar. 

```
function Navbar() {
    return (
        <nav className="nav__container nav sticky content">
            <ul className="nav__container nav ul">
                <li><a className="links" href="home">Home</a></li>
                <li><a className="links" href="mews">Mews</a></li>
                <li><a className="links" href="contact">Contact</a></li>
                <li><a className="links" href="https://www.cats.org.uk/sponsor">About</a></li>
            </ul>
        </nav>
    )
}

export default Navbar;
```


