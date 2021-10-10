import Login, { LoginPanelState } from "components/Login";
import MenuTool from "components/MenuTool";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import style from "./index.module.scss";

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loginPanelVisible, setLoginPanelVisible] =
    useRecoilState(LoginPanelState);
  const state: any = {
    ctx: null,
  };
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    state.ctx = ctx;
    console.log(ctx);
    console.log("ㅎㅇㅎㅇ");
    console.log(process.env.GOOGLE_LOGIN_API);
  }, []);

  const openSocialLogin = () => {
    setLoginPanelVisible(true);
    alert("ㅎㅇㅎㅇ");
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
              <canvas ref={canvasRef} height={600} width={400}></canvas>
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
