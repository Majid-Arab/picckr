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
    <div className="flex flex-col items-center gap-16 px-5 sm:px-8 md:px-14 lg:px-16 xl:px-28 py-8 sm:py-14 md:py-20">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900">
          How it works
        </h1>
        <p className="text-lg md:text-xl text-black pt-5">
          Find out how to register as a sender
        </p>
      </div>
      <div className="flex justify-center w-full max-w-3xl">
        <Image
          width={500}
          height={500}
          src="https://picckr.com/assets/images/sender-work.png"
          alt="1 Mobile"
          className="w-full h-auto"
        />
      </div>
      <div
        className="relative w-full py-16 px-4 bg-cover bg-center"
      >
        <div className="relative flex flex-wrap justify-center gap-8 mx-auto text-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-6 p-6"
            >
              <div className="relative w-20 md:w-[200px]">
                <Image src={item.src} alt={`Image`} objectFit="cover" height={500} width={500}/>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                {item.heading}
              </h3>
              <p className="text-md text-black">{item.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;
