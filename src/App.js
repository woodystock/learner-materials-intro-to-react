import './App.css';
import icon from './cat.png'
import NavBar from './components/Navbar';
import Header from './components/Header';
import CindyClawford from './components/CindyClawford';
import LittleMissPurrfect from './components/LittleMissPurrfect';
import ElTaco from './components/ElTaco';
import MrGwumpy from './components/MrGwumpy';
import Link from './components/Link';
import Footer from './components/Footer';

function App() {
  return (
    <>
    
      <NavBar />

      <Header />

      <main>
        <div className="cards__wrapper">
          
          <CindyClawford />

          <LittleMissPurrfect/>

          <ElTaco/>

          <MrGwumpy/>

        </div>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
