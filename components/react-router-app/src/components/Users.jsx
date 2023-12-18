import axios from "axios";
import { NavLink, Switch, Route, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import User from "./User";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  const {path, url} = useRouteMatch();

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, []);
  return (
    <div>
      <h1>Users</h1>
      {loading && <span>Loading...</span>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            <NavLink activeClassName="active" to={`${url}/${user.id}`}>
              {user.name}
            </NavLink>
          </li>
        ))}
      </ul>

      <Switch>
        <Route exact path={path}>
          <h3>Please select a user</h3>
        </Route>
        <Route path={`${path}/:id`} component={User}></Route>
      </Switch>
    </div>
  );
}

export default Users;
