import React from 'react';
import gitHubReducer from "./GitHubReducer";

const GitHubContext=React.createContext();

const url = "https://api.github.com/users";

const initialState={
  users: [],
  loading: false
}

const GitHubProvider = ({children}) => {

    const [state, dispatch] =React.useReducer(gitHubReducer, initialState);

    
//get the initial users - for testing purpose:
  async function fetchUsers () {
    setLoading();
    const response = await fetch(url);
    const data = await response.json();
    return dispatch({type: "GET_USERS", payload: data})
  }

  // React.useEffect(() => {
  //   fetchUsers();
  // }, [])

    //set loading
    function setLoading () {
      dispatch({type: "SET_LOADING"})
    }



    return <GitHubContext.Provider value ={{
      users: state.users,
      loading: state.loading,
    
    }}>
        {children}
    </GitHubContext.Provider>
}

export {GitHubContext, GitHubProvider};

export const useGitHubGlobal = () => {
    return React.useContext(GitHubContext);
}
