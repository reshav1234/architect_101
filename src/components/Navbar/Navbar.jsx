import React from 'react'


const Navbar = () => {
  return (
    <>
      <ul className="nav justify-content-end">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/projects">Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/aboutus">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/blog" >Blog</a>
        </li>
      </ul>
    </>
  )
}

export default Navbar