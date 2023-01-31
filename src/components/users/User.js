import React from 'react';
import { useParams } from 'react-router-dom';
import Spinner from "../assets/Spinner";
import {FaCodepen, FaUserFriends} from "react-icons/fa";
import {Link} from "react-router-dom";
import RepoList from "../repos/RepoList";


function User({match}) {
    let [user, setUser]=React.useState({});
    const[loading, setLoading]=React.useState(true);


    const {login} = useParams();
  
//get user
    async function getUser() {
      try {
        let response = await fetch(`https://api.github.com/users/${login}`, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
          }
        });
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
    }
      
  return (
    <div className="user-section">
      <Link to="/" className="btn back">Back to Search</Link>

      <div className="user-container">
          <div className="user-main">
            <div className="image">
              <div className="photo">
                <img src={user.avatar_url} alt="avatar"></img>
              </div>
            </div>
            <div className="card-body">
              <h2 className="card-title title-name display">{user.name}</h2>
              <p className="title-login display">{user.login}</p>
              {user.hireable && (
                <div className="hire-container">
                  <div className="hire">
                    <span className="type">{user.type}</span>
                    <span>Hireable</span>
                  </div>
                </div>
              )}
              <p className="bio">{user.bio}</p>
              <div className="profile">
                <a href={user.html_url} className="btn btn-outline" target="_blank" rek="noreferrer">Visit GitHub Profile</a>
              </div>
              <div className="location-company-twitter">
                <div className="location">
                  <span className="top">Location</span>
                  {user.location ? <span className="bottom">{user.location}</span> : <span className="bottom">-</span>}
                </div>
                <div className="company">
                  <span className="top">Company</span>
                  {user.company ? <span className="bottom">{user.company}</span> : <span className="bottom">-</span>}
                </div>
                <div className="twitter">
                  <span className="top">Twitter</span>
                  {user.twitter_username ? <span className="bottom">{user.twitter_username}</span> : <span className="bottom">-</span>}
                </div>
              </div>
            </div>
            
          </div>
          <div className="card-bottom">
            <div className="following info left">
              <FaUserFriends className="icon-bottom"></FaUserFriends>
              <div>
                  <span className="top info-user">Following</span>
                  {user.following ? <span className="bottom num">{user.following}</span> : <span className="bottom num">0</span>}
                </div>
            </div>
            <div className="followers info right">
              <FaUserFriends className="icon-bottom"></FaUserFriends>
              <div>
                  <span className="top info-user">Followers</span>
                  {user.followers ? <span className="bottom num">{user.followers}</span> : <span className="bottom num">0</span>}
                </div>
            </div>
            <div className="repos info left">
            <FaCodepen  className="icon-bottom"></FaCodepen>
              <div>
                  <span className="top info-user">Public Repos</span>
                  {user.public_repos ? <span className="bottom num">{user.public_repos}</span> : <span className="bottom num">0</span>}
                </div>
            </div>
            <div className="gists info right">
            <FaCodepen  className="icon-bottom"></FaCodepen>
              <div>
                  <span className="top info-user">Public Gists</span>
                  {user.public_gists ? <span className="bottom num">{user.public_gists}</span> : <span className="bottom num">0</span>}
                </div>
            </div>
          </div>
          <div className="repos-container">
            <h2>Repositories</h2>
            <RepoList></RepoList>
          </div>
      </div>
    </div>
  );
}

export default User;
