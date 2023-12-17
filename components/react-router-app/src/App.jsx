import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

// PAGES

import Home from "./components/Home"
import About from "./components/About"
import Users from "./components/Users"

function App() {
  return (
    <Router>
    
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>

      
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
      </Switch>
    
  </Router>
  );
}


export default App;