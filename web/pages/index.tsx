import Canvas from "components/Canvas";
import Login, { ILogin } from "components/Login";
import MenuTool from "components/MenuTool/MenuTool";
import { useLogin } from "components/useLogin";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import style from "./index.module.scss";

const Home: NextPage = () => {
  const { setLoginPanelVisible } = useLogin();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const state: any = {
    ctx: null,
  };
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    state.ctx = ctx;
    console.log(ctx);
    console.log(process.env.GOOGLE_LOGIN_API);
  }, []);

  const openSocialLogin = () => {
    setLoginPanelVisible(true);
  };

  return (
    <>
      <div>
        <Head>
          <title>AniTool</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <section className={style.container}>
            <section id={style.menuTool}>
              <div className={style.title}>제목</div>
              <div className={style.socialLogin} onClick={openSocialLogin}>
                로그인
              </div>
            </section>
            <section id={style.commandTool}>
              <MenuTool></MenuTool>
            </section>
            <section id={style.drawScreen}>
              <Canvas></Canvas>
            </section>
            <section id={style.sideTool}>사이드툴</section>
            <section id={style.animationTool}>애니메이션툴</section>
          </section>
        </main>
        <footer></footer>
      </div>
      <Login />
    </>
  );
};

export default Home;
