import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Web3Button } from "@web3modal/react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const clicked = async () => {
    console.log("BEFORE");
    const value = await import("@lit-protocol/lit-node-client");
    console.log("AFTER", value);

    const client = new value.LitNodeClient({
      litNetwork: "serrano",
    });

    await client.connect();
  };

  return (
    <>
      <Web3Button />
      <button onClick={clicked}>Click me for error</button>
    </>
  );
}
