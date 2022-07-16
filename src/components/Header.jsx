import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
       <ul>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li>
                   <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                
                <li>
                    <Link className="nav-link" to={"/list"}>List</Link>
                </li>
                
                <li>
                    <Link className="nav-link" to={"/"}>Contacto</Link>
                </li>
              </div>
            </div>
         </div>
       </ul>
      </nav>
    </header>
  )
}

export default Header;