import { useParams } from "react-router-dom"
import { services } from "../assets/constants"
import Header from "../components/Header"
import Footer from "../components/Footer"
// import { useEffect } from "react"

function ServicesView() {
    const name = useParams().name
    // console.log(name)

    // const {pathname} = useLocation()
    // useEffect(()=> {
    //   if (pathname != '/') {
    //     console.log(pathname, 'changed')
  
    //     window.scroll({
    //       top: 0,
    //       left: 0,
    //       behavior: "smooth",
    //     });
    //   }
  
    // }, [pathname])

    const service = services.find(service => service.name == name)
  return (
    <>
    <Header location="services"/>
    <section className=" flex flex-col lg:flex-row md:justify-between pt-24 items-center justify-center gap-10 min-h-[83vh] ">
      <h1 className=" text-2xl xl:text-5xl max-w-full">{service.name}  </h1>
      <div className=" flex flex-col justify-center gap-5">
        {
          service.description.map(dis => (
            <p key={dis} className=" w-full">{dis}</p>
          ))
        }
      </div>

    </section>

      <Footer location ='sss'/>
    </>
  )
}

export default ServicesView