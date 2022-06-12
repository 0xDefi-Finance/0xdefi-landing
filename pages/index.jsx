import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Typed from 'react-typed'

const Home = () => {
  return (
    <div>
      <section className="h-screen hero bg-[url('/hero.jpeg')] bg-cover">
        <Header />
        <div className="flex flex-col items-center justify-center flex-1 w-full h-full px-5 -my-10 text-center">
          <p className="py-1 text-4xl font-extrabold text-center text-transparent lg:text-6xl bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-100 ">
            Permisionless and Trustless <br /> Defi Protocol
          </p>
        

          <p className="my-5 text-xs lg:text-sm ">
          <Typed
      strings={[
            "Home of DeFi on Shardeum",
            "Community Focused & Community Driven",
            "Experience Seamless Swapping of Tokens",
            "Put Your Crypto on Work, Earn Sustainable Yields !"
          ]}
          typeSpeed={50}
          backSpeed={70}
          loop
        />
          </p>
         
          <div className="flex items-center my-2">
            <a
              href="#"
              className="p-2 px-5 m-2 text-xs font-medium bg-indigo-500 rounded-md lg:text-sm hover:text-gray-100 hover:from-indigo-500 hover:to-pink-500 active:ring-2"
            >
              Launch Dapp
            </a>
            <a
              href="#"
              className="p-2 px-5 m-2 text-xs font-medium bg-indigo-500 rounded-md lg:text-sm hover:text-gray-100 hover:from-indigo-500 hover:to-pink-500 active:ring-2"
            >
              Explore Docs
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
