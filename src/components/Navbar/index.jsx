import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <>
      <nav className="w-full fixed top-0 ">
        <div className="flex w-full bg-black rounded-br-[200px] text-white">
          <Link className="mx-5 my-2" href="/">
            <Image
              src="/images/logo.png"
              alt="nav icon"
              width={50}
              height={50}
            />
          </Link>
          <Link className="mx-5 my-2 text-white" href="/projects">
           Projects
          </Link>
          <Link className="mx-5 my-2 text-white" href="/contact">
           Contact
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
