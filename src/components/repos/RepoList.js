import React from 'react';
import {useParams} from "react-router-dom";
import RepoItem from "../repos/RepoItem";

function RepoList() {
    const [repos, setRepos]=React.useState([]);
    const {login}=useParams();

    //get repos
    async function getRepos () {
        let response = await fetch(`https://api.github.com/users/${login}/repos`, {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
          }
        })
        let data = await response.json();
        console.log(data);
        setRepos(data);
      }

      React.useEffect(() => {
        getRepos();
      }, [])
  
      console.log(repos);

  return (
    <div className="repos">
      {repos.map((repo) => {
        return <RepoItem key={repo.id} repo={repo}></RepoItem>
      })}
    </div>
  );
}

export default RepoList;
