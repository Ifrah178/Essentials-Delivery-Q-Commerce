import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between bg-blue-500 text-white py-12 px-6">
      {/* Left Text Section */}
      <div className="lg:w-1/2">
        <p className="text-sm uppercase">Summer 2020</p>
        <h1 className="text-5xl font-bold my-4">NEW COLLECTION</h1>
        <p className="text-lg mb-6">
          We know how large objects will act, but things on a small scale.
        </p>
        <button className="bg-green-500 px-6 py-3 text-white rounded hover:bg-green-600">
          Shop Now
        </button>
      </div>

      {/* Right Image Section */}
      <div className="lg:w-1/2 mt-6 lg:mt-0 flex justify-center">
        <Image
          src="/HeroSection.png" // Path to the image in your public folder
          alt="New Collection"
          width={500} // Adjust width
          height={500} // Adjust height
          className="w-full max-w-md"
        />
      </div>
    </section>
  );
};

export default HeroSection;
