import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

function Content() {
  return (
    <main className="bg-white dark:bg-black">
      {/* Hero Banner */}
      <div className="h-[90vh] relative">
        <Image src={assets.hero} alt="Hero" fill className="object-cover" />
      </div>
      <div className="flex">
        {/* Side A */}
        <div className="w-3/4 flex items-center justify-center">
          <div className="w-full mx-4 my-2 text-black shadow-md rounded-md"></div>
        </div>
        {/* Side B */}
        <div className="bg-green-400 w-1/4 flex items-center justify-center">
          side b
        </div>
      </div>
    </main>
  );
}

export default Content;
