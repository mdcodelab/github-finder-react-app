import React from 'react';
import UserResults from "../components/users/UserResults";

function Home() {
  
  return (
    <div className="home">
      <h1 className="title">Welcome</h1>
      {/*search results*/}
      <UserResults></UserResults>
    </div>
  );
}

export default Home;
