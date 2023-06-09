import React from "react";
import Head from "next/head";
/* import { Inter } from "next/font/google"; */
import Menu from "@/componentes/Menu";

import styles from "../styles/Home.module.css"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Loja Next</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <h1 className={styles.title}>Pagina Inicial</h1>
      </main>
    </div>
  );
}
