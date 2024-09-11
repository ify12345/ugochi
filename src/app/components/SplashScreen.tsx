"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

function Splashscreen({ children }: any) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 900);
  }, []);
  return show ? (
    <div className="h-[100vh] w-[100vw] bg-[#fff] flex items-center  flex-col justify-center">
      <img className="size-[150px]" src="/img/loader.gif" alt="loader" />
    </div>
  ) : (
    <>{children}</>
  );
}

export default Splashscreen;
