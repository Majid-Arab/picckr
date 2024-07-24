import Image from "next/image";
import React from "react";

function Separator() {
  return (
    <div>
      <Image
        src="https://picckr.com/assets/images/line.png"
        alt="line"
        width={500}
        height={500}
        className="w-full h-8 sm:h-11 md:h-14 my-0"
      />
    </div>
  );
}

export default Separator;
