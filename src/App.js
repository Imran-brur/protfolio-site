import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About';
import Home from './components/Home/Home/Home';
import Project from './components/Project/Project';
import Blog from './components/Blog/Blog';
import Contact from './components/Contact/Contact';
import Header from './components/Sheared/Header/Header';


function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path='/home'>
          <Home></Home>
          </Route>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='/projects'>
            <Project></Project>
          </Route>
          <Route path='/blogs'>
            <Blog></Blog>
          </Route>
          <Route path='/contactMe'>
            <Contact></Contact>
          </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
