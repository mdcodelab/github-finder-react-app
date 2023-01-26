import React from 'react';
import {Link} from "react-router-dom";


function UserItem({user: {login, avatar_url} }) {
  
  return (
    <div className="card">  
        <div className="avatar">
            <img src={avatar_url} alt="avatar"></img>
        </div>
        <div className="username">
            <h3>{login}</h3>
            <Link to={`/users/${login}`} className="link-user">Visit profile</Link>
        </div>
    </div>
  );
}

export default UserItem;
