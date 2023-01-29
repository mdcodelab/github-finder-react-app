import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from "../assets/Spinner";


function User({match}) {
    let [user, setUser]=React.useState({});
    const[loading, setLoading]=React.useState(true);

    const {login} = useParams();
  

    async function getUser() {
      try {
        let response = await fetch(`https://api.github.com/users/${login}`, {
        headers: {
          Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
        }
      })
      let data = await response.json();
        setUser(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    }

    React.useEffect(() => {
      getUser();
    }, [login]);
  

    if(loading) {
      return (<Spinner></Spinner>)
    }

    if(!user) {
      return (<h2>No user to display</h2>)
    }


  return (
    <div className="user" style={{color: "white"}}>
   <h1 style={{color: "white"}}>{user.login}</h1>
    </div>
  );
}

export default User;
