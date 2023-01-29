import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from "../assets/Spinner";
import {FaCodepen, FaStore, FaUserFriends, FaUsers} from "react-icons/fa";
import {Link} from "react-router-dom";


function User({match}) {
    let [user, setUser]=React.useState({});
    const[loading, setLoading]=React.useState(true);

    const {login} = useParams();
  

    async function getUser() {
      try {
        let response = await fetch(`https://api.github.com/users/${login}`);
      let data = await response.json();
      console.log(data);
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
    } else {
      const {
        name,
        type,
        avatar_url,
        location,
        bio,
        blog,
        twitter_username,
        login,
        html_url,
        followers,
        following,
        public_repos,
        public_gists,
        hireable,
    
      } = user;
    }


  return (
    <div className="user" style={{color: "white"}}>
   <h1 style={{color: "white"}}>{user.login}</h1>
    </div>
  );
}

export default User;
