import MenuTool from "components/MenuTool";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef } from "react";
import style from "./index.module.scss";
const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state: any = {
    ctx: null,
  };
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    state.ctx = ctx;
    console.log(ctx);
  }, []);
  return (
    <div>
      <Head>
        <title>AniTool</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className={style.container}>
          <section id={style.menuTool}>메뉴바</section>
          <section id={style.commandTool}>
            <MenuTool></MenuTool>
          </section>
          <section id={style.drawScreen}>
            <canvas ref={canvasRef} height={600} width={400}></canvas>
          </section>
          <section id={style.sideTool}>사이드툴</section>
          <section id={style.animationTool}>애니메이션툴</section>
        </section>
      </main>
      <footer></footer>
    </div>
  );
};

export default Home;
