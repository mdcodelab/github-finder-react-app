import React from 'react';
import Spinner from "../assets/Spinner";

function UserResults() {

  const[users, setUsers]=React.useState([]);
  const[loading, setLoading]=React.useState(true);

  async function fetchUsers () {
    const response = await fetch('https://api.github.com/users');
    const data = await response.json();
    setUsers(data);
    setLoading(false);
  }

  React.useEffect (() => {
    fetchUsers();
  }, []);

  if (!loading) {
    return (
      <div className="users-container">
      {users.map((user, index) => {
        return (<h3 key={index}>{user.login}</h3>)
      })}
    </div>)
  } else {
    return <Spinner></Spinner>
  }
}

export default UserResults;

