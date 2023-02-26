import Link from "next/link";
// import Image from "next/image";
import Mainheaders from "./menu_collections.json";
import { useState } from "react";

const MobileNavBar = () => {
  console.log(Mainheaders, "aye");
  // scroll into view
  const [openMenu, setOpenMenu] = useState(-1);
  const [scrolling, setScrolling] = useState(false);

  return (
    <>
      <nav
        className={`w-full bg-white z-50 fixed  inset-0 md:hidden block overflow-y-auto ${
          scrolling == true && "pb-[500px]"
        }`}
      >
        <div className="w-full bg-black fixed top-0 text-center">
          <h1 className="text-white">Navbar</h1>
        </div>
        {Mainheaders.map((item, i) => {
          return (
            <>
              {item.title === "New Arrivals" ||
              item.title === "Online Exclusives" ? (
                <Link
                  className="underline text-red-500 my-20"
                  href={`/${item.handle}`}
                  key={item.title}
                >
                  <div>
                    <p className="my-2 p-5 text-black">{item.title}</p>
                  </div>
                </Link>
              ) : (
                <>
                  <Link
                    key={item.title}
                    className=""
                    href={`/#${item.handle}`}
                    onClick={() => {
                      if (openMenu == i) {
                        setOpenMenu(-1);
                        setScrolling(false);
                      } else {
                        setOpenMenu(i);
                        setScrolling(true);
                      }
                    }}
                  >
                    <p id={item.handle} className="text-black p-5 my-2">
                      {item.title}
                    </p>
                  </Link>
                  {openMenu == i && (
                    <>
                      {item?.sub_collections.length !== 0 && (
                        <>
                          {item?.sub_collections.map((subItem) => (
                            <div className="px-5">
                              <p>{subItem.menu_title}</p>
                            </div>
                          ))}
                        </>
                      )}
                    </>
                  )}
                </>
              )}
            </>
          );
        })}
      </nav>
    </>
  );
};
export default MobileNavBar;
