"use client";
import Image from "next/image";
import ButtonUnstyled from "@mui/base/ButtonUnstyled";
import { Inter } from "@next/font/google";
import styles from "./page.module.css";
import Hearder from "@/components/Hearder";
import Player from "./Player";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hearder />
      {/* <Player /> */}
      <div className="container mx-auto">
        {/* <div> */}
        <ButtonUnstyled>Connect</ButtonUnstyled>
      </div>
    </>
  );
}
