import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/Navbar';
import Home from './Pages/Home'
import WhoWeAre from './Pages/WhoWeAre';
import TraineeProgram from './Pages/TraineeProgram';
import InternProgram from './Pages/InternProgram';
import ApplyToHost from './Pages/ApplyToHost';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/WhoWeAre" component={WhoWeAre} />
          <Route path="/TraineeProgram" component={TraineeProgram} />
          <Route path="/InternProgram" component={InternProgram} />
          <Route path="/ApplyToHost" component={ApplyToHost} />
        </Switch>
      </div>
    </Router>
  );
}



export default App;
