import Image from "next/image";
import { useEffect, useState } from "react";
const Nav = () => {
  const [burgerState, setBurgerState] = useState(false);
  const changeState = () => {
    setBurgerState(!burgerState);
  };

  return (
    <nav className="mt-4 w-4/5 mx-auto flex justify-between ">
      <img src="/images/logo.svg" alt="logo" />
      <button className="z-50 md:hidden" onClick={changeState}>
        {!burgerState && <img src="/images/icon-menu.svg" alt="burger menu" />}
        {burgerState && <img src="/images/icon-menu-close.svg" />}
      </button>
      <div className=" hidden w-auto  items-center justify-between gap-x-7 md:flex">
        <a
          className="text-dark_blue font-normal text-sm hover:text-red"
          href="#home"
        >
          Home
        </a>
        <a
          className="text-dark_blue font-normal text-sm hover:text-red"
          href="#new"
        >
          New
        </a>
        <a
          className="text-dark_blue font-normal text-sm hover:text-red"
          href="#popular"
        >
          Popular
        </a>
        <a
          className="text-dark_blue font-normal text-sm hover:text-red"
          href="#trending"
        >
          Trending
        </a>
        <a
          className="text-dark_blue font-normal text-sm hover:text-red"
          href="#categories"
        >
          Categories
        </a>
      </div>

      <>
        {/* overlay when burger menu  open */}
        <div
          className={`z-30 ${
            burgerState ? " left-0" : " left-full"
          } fixed top-0  w-full h-full bg-black opacity-50 md:hidden `}
        ></div>
        {/*---------------------------------- */}
        <aside
          id="menu"
          className={`z-40  ${
            !burgerState
              ? "-right-full transition-all duration-700"
              : "right-0 transition-all duration-700"
          } fixed top-0   h-full w-3/5 bg-off_white  flex flex-col justify-center  items-start p-5 gap-4  md:hidden `}
        >
          <a
            className="text-very_dark_blue font-bold"
            href="#home"
            onClick={changeState}
          >
            Home
          </a>
          <a
            className="text-very_dark_blue font-bold"
            href="#new"
            onClick={changeState}
          >
            New
          </a>
          <a
            className="text-very_dark_blue font-bold"
            href="#popular"
            onClick={changeState}
          >
            Popular
          </a>
          <a
            className="text-very_dark_blue font-bold"
            href="#trending"
            onClick={changeState}
          >
            Trending
          </a>
          <a
            className="text-very_dark_blue font-bold"
            href="#categories"
            onClick={changeState}
          >
            Categories
          </a>
        </aside>
      </>
    </nav>
  );
};
export default Nav;
