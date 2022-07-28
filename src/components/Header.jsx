import React from 'react'
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = (props) => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <ul>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li classsName="nav-item">
                   <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                
                <li classsName="nav-item">
                    <Link className="nav-link" to={"/list"}>List</Link>
                </li>
                
                <li classsName="nav-item">
                    <Link className="nav-link" to={"/fauvorites"}>My Fauvorites</Link>
                </li>
                <li classsName="nav-item d-flex align-items-center">
                  <span className="text-success">
                    {
                    props.fauvorites.length > 0 && <>Movies in fauvorites: {props.fauvorites.length}</>
                    }
                  </span>
                </li>
              </div>
            </div>
          </ul>
        </div>
        <SearchBar />
      </nav>
    </header>
  )
}

export default Header;