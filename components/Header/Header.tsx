import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="grid content-center grid-cols-2 py-2 border-gray-900 px-18 pxborder-b border-1 md:py-2 md:px-15 backdrop-blur-md bg-black/10">
      <img src="/0xlogo 2.png" alt="" className="w-12 ml-5 " />

      <div
        className="flex-col items-center justify-end hidden mt-3 md:flex md:flex-row md:ml-auto md:mt-0 sm:hidden"
        id="navbar-collapse"
      >
        <a href="#" className="p-1 text-sm text-white rounded lg:px-2 md:mx-2">
          Alphanet Liberty 1.1
        </a>
        <div className="ml-10">
        <button className="p-2 px-5 m-2 text-xs font-medium  text-black bg-gradient-to-r from-teal-200 to-lime-200  rounded-md lg:text-sm hover:text-black hover:from-lime-200 hover:to-teal-200 active:ring-2 before:content-['Launch_Dapp'] hover:before:content-['Coming_Soon']" disabled={true}
>
            <a
              href="#"
            >
            </a>
            </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
