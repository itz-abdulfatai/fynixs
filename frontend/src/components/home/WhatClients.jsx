function WhatClients() {
  return (
    <section id="reviews" className=" py-5 max-md:min-h-[60vh]  flex flex-col md:flex-row  justify-center md:items-start items-center ">

        <div className=" z-10 flex justify-stretch items-stretch -rotate-6 md:translate-x-20 w-full  max-w-[450px] overflow-hidden rounded-3xl aspect-square">
            <img src="/logo-big.jpeg" alt="fynix logo" />
        </div>
        <div className=" border border-[#ffffff31] z-20 rotate-6 w-[90%] aspect-square md:-translate-x-20 max-md:-mt-[380px] max-w-[450px]  md:translate-y-28 glass-nav rounded-3xl p-5 flex flex-col justify-center items-center gap-5 relative overflow-hidden ">
            <h2 className=" text-sm ">What Clients Will Say!</h2>
            <span className="absolute top-8 opacity-50 rotate-45 uppercase text-sm font-bold text-center -right-6 d-outline hidden md:block">Your Vision, <br/> Our Passion!</span>
            <p className=" text-sm sm:text-xs  lg:text-sm">As a dynamic startup, we may be new to the scene, but our passion for innovation and creativity is second to none. At FYNIXS, we bring fresh perspectives and cutting-edge strategies, always driven by the mission to make your business thrive. When you partner with us, you&apos;re not just gaining a service provider—you&apos;re gaining a dedicated team that&apos;s fully committed to turning your vision into reality. Together, we&apos;ll set your brand apart and ensure its success. Trust FYNIXS to bring your ideas to life.Crafting Exceptional Outcomes</p>
            <span className=" text-xs self-end font-thin italic">Innovation Meets Dedication</span>
        </div>

    </section>
  )
}

export default WhatClients