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
    //   const {
    //     name,
    //     type,
    //     avatar_url,
    //     location,
    //     bio,
    //     blog,
    //     twitter_username,
    //     login,
    //     html_url,
    //     followers,
    //     following,
    //     public_repos,
    //     public_gists,
    //     hireable
    //   } = user;
    }


  return (
    <div className="user-section">
      <Link to="/" className="btn back">Back to Search</Link>

      <div className="user-container">
          <div className="image">
             <div className="photo">
                <img src={user.avatar_url} alt="avatar"></img>
              </div>
              <div className="title-container">
                <h3 className="title-name">{user.name}</h3>
                <h3 className="title-login">{user.login}</h3> 
              </div>
        </div>

      <div className="card-body">
        <h2 className="card-title title-name display">{user.name}</h2>
        <p className="title-login display">{user.login}</p>
        {user.hireable && (
            <div className="hire-container">
              <div className="hire">
                <span className= "type">{user.type}</span>
                <span>Hireable</span>
              </div>
              <p className="bio">{user.bio}</p>
            </div>
            )}
            <div className="profile">
                <a href={user.html_url} target="_blank" rel="noreferrer" className="btn btn-outline">
                Visit GitHub Profile</a>
            </div>
        </div>
      </div>

    </div>
  );
}

export default User;
