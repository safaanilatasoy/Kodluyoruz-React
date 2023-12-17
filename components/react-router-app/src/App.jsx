import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';

// PAGES

import Home from "./components/Home"
import Users from "./components/Users"
import About from "./components/About"

function App() {
  return (
    <Router>
    <div>
      <nav>
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
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  </Router>
  );
}


export default App;