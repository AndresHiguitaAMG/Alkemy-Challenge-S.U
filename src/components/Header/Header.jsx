import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg bg-light">
       <ul>
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <li>
                   <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                
                <li>
                    <Link className="nav-link" href="/">List</Link>
                </li>
                
                <li>
                    <Link className="nav-link" href="/">Contacto</Link>
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