const Hero = () => {
  return (
    <section id="home" className="w-4/5  mx-auto my-10 lg:col-start-1 lg:col-end-3 lg:my-0">
      <div className="mb-4 ">
        <img src="/images/image-web-3-mobile.jpg" alt="" className="md:hidden" />
        <img src="/images/image-web-3-desktop.jpg" alt="" className="hidden md:block lg:w-full"/>
      </div>
      <div className="lg:flex  lg:gap-x-2">
        <h1 className="text-very_dark_blue font-black text-40px leading-50px  lg:text-[30px] ">
          The Bright Future of Web 3.0?
        </h1>
        <div className=" ">
          <p className="text-dark_blue text-13px mt-4 ">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people . But is it
            really fullfilling its promise?
          </p>
          <button className="bg-red text-off_white mt-4  w-40 h-10 uppercase tracking-[3px] hover:bg-very_dark_blue ">read more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
