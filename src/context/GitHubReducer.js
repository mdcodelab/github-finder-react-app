

function GitHubReducer(state, action) {
  if(action.type === "SET_LOADING") {
    return {...state, loading: true}

  } 
  else if(action.type === "GET_USERS") {
    return {...state, users: action.payload, loading: false}

  } else {
    return state;
  }
}

export default GitHubReducer


