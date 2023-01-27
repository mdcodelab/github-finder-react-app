import React from 'react';
import { useGlobalAlert } from '../../context/AlertContext';
import { useGitHubGlobal } from '../../context/GitHubContext'; 

function UserSearch() {
    const[text, setText]=React.useState("");
    const{users, searchUsers, clearUsers}=useGitHubGlobal();
    const{setAlert}=useGlobalAlert();

    function onChange(e) {
        setText(e.target.value);
    }

    function onSubmit(e) {
        e.preventDefault();
        if(!text) {
            setAlert("Please enter something!", "error");
        } else {
            //search users
            searchUsers(text);
        }
        setText("");
    }

  return (
    <div className="user-search-container">
        <div className="user-search">
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="Search..." value={text} onChange={onChange}></input>
                <button type="submit" className="btn btn-search">GO</button>
        </form>
        {users.length > 0 && (
            <div>
                <button className="btn btn-clear" onClick={clearUsers}>CLEAR</button>
            </div>
        )}
        
      </div>
    </div>  
  );
}

export default UserSearch;
