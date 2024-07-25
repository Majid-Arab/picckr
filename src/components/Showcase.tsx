import Image from "next/image";

const Showcase = () => {
  const items = [
    {
      src: "https://picckr.com/assets/svg/sender-work-1.svg",
      heading: "Heading 1",
      paragraph: "This is the paragraph for heading 1.",
    },
    {
      src: "https://picckr.com/assets/svg/sender-work-2.svg",
      heading: "Heading 2",
      paragraph: "This is the paragraph for heading 2.",
    },
    {
      src: "https://picckr.com/assets/svg/sender-work-6.svg",
      heading: "Heading 3",
      paragraph: "This is the paragraph for heading 3.",
    },
    {
      src: "https://picckr.com/assets/svg/sender-work-3.svg",
      heading: "Heading 4",
      paragraph: "This is the paragraph for heading 4.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-between gap-20 px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20">
      <div className="text-center">
        <h1 className="text-1xl sm:text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
          How it works
        </h1>
        <p className=" text-lg md:text-xl leading-6 text-black pt-5">
          Find out how to register as a sender
        </p>
      </div>
      <div className="flex justify-center">
        <Image
          width={500}
          height={500}
          src="https://picckr.com/assets/images/sender-work.png"
          alt="Your Company"
          className="w-2/4 h-auto"
        />
      </div>
      <div
        className="flex justify-between mt-6"
        style={{
          backgroundImage: `url(https://picckr.com/assets/images/community-bg.png)`,
        }}
      >
        <Image
          src="https://picckr.com/assets/images/community.png"
          alt="Your Company"
          width={500}
          height={500}
          className="sm:block absolute top-40 md:top-44  lg:top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] lg:w-[85%] -mt-16"
        />
        {items.map((item, index) => (
          <div
            key={index}
            className="w-1/4 h-64 bg-cover bg-center flex flex-col items-center gap-10 justify-center p-4"
          >
            <div className="relative w-1/4 h-64">
              <Image
                src={item.src}
                alt={`Image`}
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="text-center">
              <h3 className="text-xl md:text-2xl text-black  font-semibold text-center">
                {item.heading}
              </h3>
              <p className="text-center text-md text-black">{item.paragraph}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcase;
