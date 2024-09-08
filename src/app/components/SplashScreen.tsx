"use client";
import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";

function Splashscreen({ children }: any) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 900);
  }, []);
  return show ? (
    <div
      className="h-[100] w-[100vw],
        background-"#fff",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        color: "#fff",
        position: "fixed",
        top: 0,
      }}
    >
      <img
        // objectFit="cover"
        width={300}
        height={150}
        style={{ objectFit: "contain" }}
        src="/img/loading.gif"
      />
      <Typography mt={2}>Your best choice now</Typography>
    </div>
  ) : (
    <>{children}</>
  );
}

export default Splashscreen;
