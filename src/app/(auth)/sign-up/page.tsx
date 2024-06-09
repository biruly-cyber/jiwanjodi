"use client";
import React from "react";
import style from "../../custom-css/sign-up.module.css";

const page = () => {
  return (
    <>
      <section className="flex justify-between items-center">
        <div
          className={`h-screen w-1/2 `}
          style={{
            backgroundImage: `url('../../../assets/sign-up-img.jpg')`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          {/* Content for the first div */}
        </div>
        <div className="h-screen w-1/2 bg-green-500">
          {/* Content for the second div */}
        </div>
      </section>
    </>
  );
};

export default page;
