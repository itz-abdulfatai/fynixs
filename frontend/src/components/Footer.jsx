// import { useState } from "react"
// import { Circle } from "./Header"

import { Link } from "react-router-dom"
import Nav from "./Nav"

function Footer({location = 'home'}) {
  // const [active, setActive] = useState('home')
  return (
    <footer className=" py-10 padding-x flex justify-center md:justify-between items-center">
     <Link to={'/'} className=" font-syne font-extrabold  uppercase text-xl">
      fynixs
    </Link>
    <Nav location={location}/>

    
    </footer>
  )

}

export default Footer