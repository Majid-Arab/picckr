import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="text-center mb-4">
        <Image
          src="https://picckr.com/assets/svg/logo.svg"
          alt="Logo"
          className="mx-auto w-24 sm:w-28"
          width={500}
          height={500}
        />
        <div className="flex justify-center space-x-4 mt-4">
          {/* Add your social icons here */}
          <a href="#" className="text-white">
            Icon1
          </a>
          <a href="#" className="text-white">
            Icon2
          </a>
          <a href="#" className="text-white">
            Icon3
          </a>
        </div>
      </div>
      <div className="text-center text-sm pt-20">
        Copyright 2024. PicckR. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
