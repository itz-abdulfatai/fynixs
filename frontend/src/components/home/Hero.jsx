// import { Link } from "react-router-dom"

function Hero() {
  return (
      
      <section id="home" className=" flex flex-col justify-center gap-10 gradient">
         {/* <span className=" scale-x-[2] transform  inline-block rounded-none mx-10">  o  </span> */}
     <h1 className=" tracking-wide text-xl md:text-6xl">
       {" "}
       automate your <br />{" "}
       <span className="inline-flex items-center">
         pr{" "}
         {/* max-sm:hidden  */}
         <span className="  bg-secondary h-[28px] md:h-[45px] md:w-40 w-24 rounded-lg inline-flex justify-center items-center p-2 md:p-3">
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
         <a href=" #contact" className=" uppercase flex items-center justify-between zp-1 gap-1 py-1 px-1  rounded-full bg-secondary text-primary text-xs font-semibold min-w-[2157x]">
           let&lsquo;s get started <i className="bx bxs-right-top-arrow-circle text-4xl text-accent2"></i>
         </a>
       </div>
       <div className=" max-md:text-center text-xs md:max-w-96 text-right flex flex-col items-center justify-around md:items-end h-full small-grad ">
       What if your business could achieve more, faster, and with fewer resources? Imagine a world where repetitive tasks are handled automatically, freeing you to focus on growth, innovation, and staying ahead of the competition.
         {/* <button className=" hover:opacity-70 max-sm:text-[8px] uppercase border p-2 rounded-full flex justify-between items-center gap-2 glass-btn">
           {" "}
           <i className="bx bx-globe max-sm:text-sm"></i>lass agencworld cy
         </button> */}
       </div>
     </div>
   </section>
  )
}

export default Hero