import Link from "next/link";

const Custom404 = () => {
  return (
    <div data-aos="fade-up" className="flex flex-col items-center justify-center h-screen">
    <h1 className="text-6xl font-bold text-gray-900 mb-8">Page Not Found</h1>
    <p className="text-2xl text-gray-700 text-center mb-8">Sorry, the page you are looking for does not exist.</p>
    <Link href="/">
      <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Return to Home Page
      </p>
    </Link>
  </div>
  );
};

export default Custom404;
