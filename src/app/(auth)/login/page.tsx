import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

function page() {
  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center flex-col gap-4 ">
        <div className=" bg-white p-4 rounded-md shadow-md">
          <h1 className="text-2xl font-bold text-center text-black">Halaman Login</h1>
          <p className="text-center">Silahkan login untuk melanjutkan</p>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Username"
              className="p-2 rounded-md"
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 rounded-md"
            />
            <button className="p-2 bg-black text-white rounded-md">
              Login
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default page;
