

function GitHubReducer(state, action) {
  if(action.type === "GET_USERS") {
    return {...state, users: action.payload, loading: false}
  } else {
    return state;
  }
}

export default GitHubReducer


