import Image from "next/image";
import React from "react";

export const Avatar = () => {
  return (
    <div className="hidden xl:flex  xl:max-w-none">
      <Image
        // src="/images/avatar.png"
        src="/images/avatar-grx.png"
        width={368}
        height={339}
        // width={737}
        // height={678}
        alt=""
        className="translate-z-0 w-[450px] h-[480px]"
      />
    </div>
  );
};
