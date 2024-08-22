import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Postlayout = () => {
  return (
  <>
   <Link to="/Postpage/1">post1</Link>
        <br></br>
        <Link to="/Postpage/2">post2</Link>
        <br></br>
        <Link to="/Postpage/3">post3</Link>
        <br></br>
        <li><Link to ="/Newpost">Newpost</Link></li>
        <br></br>
        <Outlet/>
  </>
  )
}

export default Postlayout