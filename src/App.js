import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import HomeCarousel from './components/HomeCarousel';

function App() {
  return (
    <div className="App">
      <NavBar />
      <HomeCarousel className='HomeCarousel' />
    </div>
  );
}

export default App;
