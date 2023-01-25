import React from 'react';
import {FaHome} from "react-icons/fa";
import {Link} from "react-router-dom";

function Notfound() {
  return (
    <div className="notfound">
      <div className="notFound">
        <h1 className="title">Ooops!</h1>
        <p>Page not found.</p>
        <Link to="/" className="link"><FaHome className="icon-home"></FaHome> <span>Back to home</span></Link>
      </div>
    </div>
  );
}

export default Notfound;
