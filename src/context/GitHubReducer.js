

function GitHubReducer(state, action) {
  if(action.type === "SET_LOADING") {
    return {...state, loading: true}
  } 
  else if(action.type === "GET_USERS") {
    return {...state, users: action.payload, loading: false}
  } else if (action.type === "CLEAR_USERS") {
    return {...state, users: []}
  } else if (action.type === "GET_USER") {
    return {...state, user: action.payload, loading: false }
  }
  else {
    return state;
  }
}

export default GitHubReducer


