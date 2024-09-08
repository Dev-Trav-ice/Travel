import React from "react";
import Popular from "../components/Popular";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <div
        className="h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(/imgs/bg.jpg)",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-70  px-3 flex flex-col items-center justify-center">
          <h1 className="text-white text-center text-4xl md:text-6xl">
            Explore the world with Us.
          </h1>
          <p className="text-white text-center text-xl md:text-2xl mt-2">
            Discover amazing places and exclusive deals.
          </p>
          <button className="text-white hover:text-black p-2 lg:p-4 rounded-lg border border-white mt-4 cursor-pointer hover:bg-white">
            Get started
          </button>
        </div>
        <Popular />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}

export default Home;
