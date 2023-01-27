import React from 'react';
import UserResults from "../components/users/UserResults";
import UserSearch from '../components/users/UserSearch';

function Home() {
  
  return (
    <div className="home">
      <h1 className="title">Welcome</h1>
      <UserSearch></UserSearch>
      <UserResults></UserResults>
    </div>
  );
}

export default Home;
