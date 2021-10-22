import './App.css';

function App() {

  return (
    <>

      <div className="nav">
        <ul className="nav">
          <li ><a className="nav-links" href="default.asp">Home</a></li>
          <li><a className="nav-links" href="news.asp">News</a></li>
          <li><a className="nav-links" href="contact.asp">Contact</a></li>
          <li><a className="nav-links" href="about.asp">About</a></li>
        </ul>
      </div>

      <header className="header">
        <h1>Welcome to React!</h1>
      </header>

      <div className="card-container">
        <div className="card">
          <h2 className="cat-name">Cindy Clawford</h2>
          <img src="https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png" alt=""></img>
          <p className="species">Species: Cat</p>
          <p className="fav-foods">Favourite Food(s): Mice</p>
          <p className="birth-year">Birth Year: 2012</p>
        </div>

        <div className="card">
          <h2 className="cat-name">Little Miss Purrfect</h2>
          <img src="https://learnwebcode.github.io/json-example/images/cat-2.jpg" alt=""></img>
          <p className="species">Species: Cat</p>
          <p className="fav-foods">Favourite Food(s): Wet food, dry food</p>
          <p className="birth-year">Birth Year: 2016</p>
        </div>

        <div className="card">
          <h2 className="cat-name">El Taco</h2>
          <img src="https://i.imgflip.com/mh1vd.jpg" alt=""></img>
          <p className="species">Species: Cat</p>
          <p className="fav-foods">Favourite Food(s): tequila, bar snax</p>
          <p className="birth-year">Birth Year: 1995</p>
        </div>

        <div className="card">
          <h2 className="cat-name">Mr Gwumpy</h2>
          <img src="https://cdn.cnn.com/cnnnext/dam/assets/190517103414-01-grumpy-cat-file-restricted.jpg" alt=""></img>
          <p className="species">Species: Cat</p>
          <p className="fav-foods">Favourite Food(s): Caviar</p>
          <p className="birth-year">Birth Year: 1984</p>
        </div>
      </div>

    </>
  );
}

export default App;
