import Image from "next/image";

const Showcase = () => {
  return (
    <div className="px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20">
      <div className="text-center">
        <h1 className="text-1xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
          Check out the app
        </h1>
        <p className="text-lg md:text-xl leading-6 text-black !text-center">
          Place orders for delivery & someone close to you will do the job
        </p>
      </div>
      <div className="relative w-full h-64 mt-6">
        <Image
          src="https://picckr.com/assets/images/sender-work.png"
          alt="Main Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between mt-6 bg ">
        {[
          "https://picckr.com/assets/svg/sender-work-1.svg",
          "https://picckr.com/assets/svg/sender-work-2.svg",
          "https://picckr.com/assets/svg/sender-work-6.svg",
          "https://picckr.com/assets/svg/sender-work-3.svg",
        ].map((src, index) => (
          <div key={index} className="relative w-1/4 h-48">
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
