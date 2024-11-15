import { Link } from "react-router-dom"

function Hero() {
  return (
      
      <section id="home" className=" flex flex-col justify-center gap-14 gradient">
         {/* <span className=" scale-x-[2] transform  inline-block rounded-none mx-10">  o  </span> */}
     <h1 className=" tracking-wide text-xl md:text-5xl">
       {" "}
       elevate your <br />{" "}
       <span className="inline-flex items-center">
         pr{" "}
         {/* max-sm:hidden  */}
         <span className="  bg-secondary h-[30px] md:h-[45px] md:w-40 w-24 rounded-lg inline-flex justify-center items-center p-2 md:p-3">
           <span className=" bg-primary w-full h-full"></span>
         </span>{" "}
         ccesses
       </span>
       {/* <div className="md:inline-flex justify-between  ml-auto items-center hidden  bg-red-600 h-[45px] w-56 rounded-full border-2 border-white ">
       <i className='bx bx-play-circle  text-sm' ></i>
       </div> */}
     </h1>
     <div className=" h-[220px] md:h-48  flex justify-between items-center flex-col-reverse md:flex-row ">
       <div>
         <Link to=" #contact" className=" uppercase flex items-center justify-between zp-1 gap-1 py-1 px-1  rounded-full bg-secondary text-primary text-xs font-semibold min-w-[2157x]">
           let&lsquo;s get started <i className="bx bxs-right-top-arrow-circle text-4xl text-accent2"></i>
         </Link>
       </div>
       <div className=" max-md:text-center text-xs md:max-w-96 text-right flex flex-col items-center justify-around md:items-end h-full small-grad ">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
         maiores rerum modi iusto earum nemo repellat  adipisicing elit. Dolor
         maiores rerum modi iusto
         <button className=" hover:opacity-70 max-sm:text-[8px] uppercase border p-2 rounded-full flex justify-between items-center gap-2 glass-btn">
           {" "}
           <i className="bx bx-globe max-sm:text-sm"></i>world class agency
         </button>
       </div>
     </div>
   </section>
  )
}

export default Hero