import { NavLink, Link } from 'react-router-dom'

export default function NavDropdown ({page, index}) {
    return (
    <details className="det_dropdown">
      <summary>
        <svg height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" fill="white"/>
        </svg>
      </summary>      
      <nav className="det_dropdown-content">
        <ul>
          <li><a href="#">Profile</a></li>
          <li><a href="#">Settings</a></li>
          <li><a href="#">Sign out</a></li>
        </ul>
      </nav>
    </details>
    )
}