import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="grid content-center grid-cols-2 py-2 border-gray-900 px-18 pxborder-b border-1 md:py-2 md:px-15 backdrop-blur-md bg-black/10">
      <img src="/0xlogo 2.png" alt="" className="w-16 ml-5 " />

      <div
        className="flex-col items-center justify-end hidden mt-3 md:flex md:flex-row md:ml-auto md:mt-0 sm:hidden"
        id="navbar-collapse"
      >
        <a href="#" className="p-1 text-sm text-white rounded lg:px-2 md:mx-2">
          Liberty 1.1
        </a>
        <div className="ml-10">
          <a
            href="#"
            className="p-2 px-4 mr-8 bg-indigo-500 rounded-md mr-text-sm via-purple-500 to-pink-500 hover:text-gray-100 hover:from-indigo-500 hover:to-pink-500 active:ring"
          >
            Launch Dapp
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
