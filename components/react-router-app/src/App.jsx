import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import './App.css';

// PAGES

import Home from "./components/Home";
import About from "./components/About";
import Users from "./components/Users";
import Error404 from "./components/Error404";

function App() {
  return (
    <Router>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/users">
              Users
            </NavLink>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/users" component={Users} />
        <Route path="*" component={Error404} />
      </Switch>
    </Router>
  );
}


export default App;