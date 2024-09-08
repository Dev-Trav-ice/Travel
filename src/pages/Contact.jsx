import React from "react";
import Footer from "../components/Footer";

function Contact() {
  return (
    <div className="">
      <div
        className="h-[calc(100vh-223px)] bg-cover bg-center"
        style={{
          backgroundImage: "url(/imgs/bg.jpg)",
        }}
      >
        <div className="w-full h-full bg-black bg-opacity-70  px-3 flex flex-col items-center justify-center">
          <h1 className="text-white text-center text-4xl md:text-6xl">
            Contact
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
