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
          <p className="px-3 py-1 font-extrabold text-center text-transparent md:text-3xl sm:text-3xl sm:mx-2 lg:text-4xl bg-clip-text bg-gradient-to-r from-purple-500 to-yellow-100 ">
            Permisionless,Trustless and Community <br />  Governed Defi Protocol.
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
            <button className="p-2 px-5 m-2 text-xs font-medium  text-black bg-gradient-to-r from-teal-200 to-lime-200  rounded-md lg:text-sm hover:text-black hover:from-lime-200 hover:to-teal-200 active:ring-2 before:content-['Launch_Dapp'] hover:before:content-['Coming_Soon']" disabled={true}
            >
              <a
                href="#"
              >
              </a>
            </button>


            <a
              href="https://docs.0xdefi.finance"
            >
              <button className="p-2 px-5 m-2 text-xs font-medium  text-black bg-gradient-to-r from-teal-200 to-lime-200  rounded-md lg:text-sm hover:text-black hover:from-lime-200 hover:to-teal-200 active:ring-2 before:content-['Explore_Docs'] hover:before:content-['Explore_Docs']"
              ></button>
            </a>
          </div>
          <div className="flex items-center my-2">
            <a
              href="https://discord.gg/3q3d8gTwBn"
            >
              <button className="p-2 px-5 m-2 text-xs font-medium  text-gray-100 bg-gradient-to-tl from-gray-900 to-gray-600  rounded-md lg:text-sm hover:text-gray-100 hover:from-gray-600 hover:to-gray-900 active:ring-2 before:content-['Join_as_a_Contributor_🚀'] hover:before:content-['DM_Us_📩_/_Join_Discord']"
              >
              </button>
            </a>

          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
