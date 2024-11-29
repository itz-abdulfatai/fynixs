import { whatC } from "../../assets/constants"

function WhatClients() {
  return (
    <section id="reviews" className=" py-5 max-md:min-h-[60vh]  flex flex-col md:flex-row  justify-center md:items-start items-center ">

        <div className=" z-10 flex justify-stretch items-stretch -rotate-6 md:translate-x-20 w-full  max-w-[450px] overflow-hidden rounded-3xl aspect-square">
            <img src="/logo-big.jpeg" alt="fynix logo" />
        </div>
        <div className=" border border-[#ffffff31] z-20 rotate-6 w-[90%] aspect-square md:-translate-x-20 max-md:-mt-[380px] max-w-[450px]  md:translate-y-28 glass-nav rounded-3xl p-5 flex flex-col justify-center items-center gap-1 md:gap-5 relative overflow-hidden ">
            <h2 className=" text-sm ">What Clients Will Say!</h2>
            
            <p className=" text-xs   lg:text-sm">{whatC}</p>
            <span className=" text-xs self-end font-thin italic">Innovation Meets Dedication</span>
        </div>

    </section>
  )
}

export default WhatClients