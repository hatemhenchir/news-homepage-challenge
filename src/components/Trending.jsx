const Trending = () => {
  return (
    <section id="trending" className="w-[80%] mx-auto lg:flex ">
      <article className="flex items-center  mb-4  ">
        <img src="/images/image-retro-pcs.jpg" alt="" className="w-28 " />

        <div className="pt-0 pl-4">
          <h2 className="text-blue text-[30px] font-extrabold ">01</h2>
          <h3 className="text-very_dark_blue font-bold text-[14px] hover:text-red hover:cursor-pointer">
            Reviving Retro PCs
          </h3>
          <p className="text-dark_blue font-normal text-xs">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </article>

      <article className="flex items-center mb-4     ">
        <img src="/images/image-top-laptops.jpg" alt="" className="w-28 " />

        <div className="pt-0 pl-4">
          <h2 className="text-blue text-[30px] font-extrabold ">02</h2>
          <h3 className="text-very_dark_blue font-bold text-[14px] hover:text-red hover:cursor-pointer ">
            Top 10 Laptops of 2022
          </h3>
          <p className="text-dark_blue font-normal text-xs">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </article>

      <article className="flex items-center mb-4 ">
        <img src="/images/image-gaming-growth.jpg" alt="" className="w-28" />

        <div className="pt-0 pl-4">
          <h2 className="text-blue text-[30px] font-extrabold ">03</h2>
          <h3 className="text-very_dark_blue font-bold text-[14px] hover:text-red hover:cursor-pointer">
            The Growth of Gaming
          </h3>
          <p className="text-dark_blue font-normal text-xs">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </article>
    </section>
  );
};

export default Trending;
