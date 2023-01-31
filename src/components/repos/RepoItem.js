import React from 'react';
import {FaEye, FaInfo, FaLink, FaUtensils, FaStar, FaRegFolderOpen} from "react-icons/fa";


function RepoItem({repo}) {
  const {name, description, html_url, forks, open_issues, watchers_count, stargazers_count} =repo;

  return (
    <div className="repo-item">
      <h3><a href={html_url}>
          <FaLink className="icon-title"></FaLink>{name}</a></h3>
      <p>
      {description}</p>
      <div className="info-items">
      <div className="info-item">
        <div style={{color: "#65FF00"}}>
          <FaEye className="icon-score"></FaEye> {watchers_count}
        </div>
      </div>
      <div className="info-item">
        <div style={{color: "#DFFF00"}}>
          <FaStar className="icon-score"></FaStar> {stargazers_count}
        </div>
      </div>
      <div className="info-item">
        <div style={{color: "#0CAFFF"}}>
          <FaRegFolderOpen className="icon-score"></FaRegFolderOpen> {forks}
        </div>
      </div>
      <div className="info-item">
        <div style={{color: "#ff6a95"}}>
          <FaInfo className="icon-score"></FaInfo> {open_issues}
        </div>
      </div>
      <div className="info-item">
        <div style={{color: "#e2e2e2"}}>
          <FaUtensils className="icon-score"></FaUtensils> {open_issues}
        </div>
      </div>
      </div>
    </div>
  );
}

export default RepoItem;
