import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";

const MobileNavBar = () => {
 

  return (
    <>
      <nav
        className={`w-full bg-white z-50 fixed  inset-0 md:hidden block overflow-y-auto `}
      >
        <div className="w-full bg-black fixed top-0 text-center">
          <h1 className="text-white">Navbar</h1>
        </div>
       
      </nav>
    </>
  );
};
export default MobileNavBar;
