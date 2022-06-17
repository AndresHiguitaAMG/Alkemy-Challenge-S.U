import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <nav>
            <ul>
                <li>
                    <Link to={"/"}>Home</Link>
                </li>

                <li>
                    <Link to={"list"}>List</Link>
                </li>

                <li>
                    <Link to={"contacto"}>Contacto</Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;