import {useEffect, useState} from "react";
import {useParams, Link} from 'react-router-dom';
import axios from "axios";




function User() {
    const [loading, setLoading] = useState(true);
    const { id } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        axios(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((res) => setUser(res.data))
                .catch((e) => console.log(e))
                    .finally(() => setLoading(false));

    },[id]);

  return (
    <div>
      <h1>User Detail</h1>
      {loading && <span>Loading...</span>}
      {!loading && <code>{JSON.stringify(user)}</code>}
    <br />
      <Link to={`/users/${parseInt(id) + 1}`}> Next User</Link>
    </div>
  );
}

export default User
