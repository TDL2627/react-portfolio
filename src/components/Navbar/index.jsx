import Link from "next/link";
import Image from "next/image";
const NavBar = () => {
  return (
    <>
      <nav className="w-full fixed top-0">
        <div className="flex w-full bg-black text-white">
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="nav icon"
              width={50}
              height={50}
            />
          </Link>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
