import React from 'react';

const GitHubContext=React.createContext();


const GitHubProvider = ({children}) => {
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



    return <GitHubContext.Provider value={{
        users,
        loading
    }}>
        {children}
    </GitHubContext.Provider>
}

export {GitHubContext, GitHubProvider};

export const useGitHubGlobal = () => {
    return React.useContext(GitHubContext);
}
