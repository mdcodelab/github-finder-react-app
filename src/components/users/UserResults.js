import React from 'react';
import { useGitHubGlobal } from '../../context/GitHubContext';
import Spinner from "../assets/Spinner";
import UserItem from "./UserItem";


function UserResults() {
  const{users, loading}=useGitHubGlobal();

  if (!loading) {
    return (
      <div className="users-container">
      {users.map((user, index) => {
        return (<UserItem key={index} user={user}></UserItem>)
      })}
    </div>)
  } else {
    return <Spinner></Spinner>
  }
}

export default UserResults;

