import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

const Nav = () => {

  
  return (
    <div className="navigation">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <Link className="nav-link " to="/customers">
                Customers
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="/order_details">
                Order Details
              </Link>
            </li>
          </ul>
        </nav>
      </div>
  );
}

export default Nav;
