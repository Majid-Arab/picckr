import Image from 'next/image';

const Showcase = () => {
  return (
    <div className="p-6">
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
          src="/path/to/your/image.jpg"
          alt="Main Image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex justify-between mt-6">
        {['/path/to/image1.jpg', '/path/to/image2.jpg', '/path/to/image3.jpg', '/path/to/image4.jpg'].map((src, index) => (
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
