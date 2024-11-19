import { useEffect, useState } from "react"
import { Circle } from "./Header"
import {  useLocation } from "react-router-dom"

function Nav({location}) {
    const [active, setActive] = useState('home')
const path = useLocation()

const isHome = location == 'home'

useEffect(() => {
    switch (path.hash) {
        case '#home':
            setActive('home')
            
            break;
            case '#services':
            setActive('services')
            
            break;
            case '#portfolio':
            setActive('portfolio')
            
            break;
            case '#contact':
            setActive('contact')
            
            break;
            case '#reviews':
            setActive('reviews')
            
            break;
            
    
        default:
            break;
    }

}, [path.hash])
    
  return (
    <nav className=" flex justify-center items-center gap-5 max-md:hidden">
      <a href={isHome?"#home" : '/#home'} onClick={()=> setActive('home')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "home"} /> home
      </a>
      <a href={isHome?"#services" : '/#services'} onClick={()=> setActive('services')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "services"} /> services
      </a>
      <a href={isHome?"#portfolio" : '/#portfolio'} onClick={()=> setActive('portfolio')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "portfolio"} /> portfolio
      </a>
      
      <a href={isHome?"#reviews" : '/#reviews'} onClick={()=> setActive('reviews')} className=" uppercase flex items-center gap-2">
        {" "}
        <Circle active={active === "reviews"} /> reviews
      </a>
    </nav>
  )
}

export default Nav