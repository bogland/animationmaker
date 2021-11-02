import Canvas from "components/Canvas";
import Login from "components/Login";
import MenuTool from "components/MenuTool/MenuTool";
import { useLogin } from "components/useLogin";
import type { NextPage } from "next";
import Head from "next/head";
import React, { useEffect, useRef } from "react";
import { useRecoilState } from "recoil";
import style from "./index.module.scss";

const Home: NextPage = () => {
  const { setLoginPanelVisible, email } = useLogin();
  useEffect(() => {}, []);

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
              <svg
                onClick={() => document.body.classList.toggle("bright")}
                width="27"
                height="19"
                viewBox="0 0 27 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.5 13.5C21.5 14.6085 21.2753 15.37 20.9167 15.9053C20.5612 16.4358 20.0397 16.7955 19.3453 17.0385C18.6422 17.2845 17.7815 17.4036 16.7815 17.4578C15.9366 17.5036 15.0206 17.5021 14.0429 17.5006C13.864 17.5003 13.683 17.5 13.5 17.5C13.317 17.5 13.136 17.5003 12.9571 17.5006C11.9794 17.5021 11.0634 17.5036 10.2185 17.4578C9.21852 17.4036 8.35777 17.2845 7.65472 17.0385C6.96034 16.7955 6.43882 16.4358 6.08335 15.9053C5.7247 15.37 5.5 14.6085 5.5 13.5C5.5 9.08172 9.08172 5.5 13.5 5.5C17.9183 5.5 21.5 9.08172 21.5 13.5Z"
                  stroke="white"
                />
                <line
                  x1="13.5"
                  y1="-2.18557e-08"
                  x2="13.5"
                  y2="4"
                  stroke="white"
                />
                <line y1="13.5" x2="4" y2="13.5" stroke="white" />
                <line
                  y1="-0.5"
                  x2="4"
                  y2="-0.5"
                  transform="matrix(-1 0 0 1 26.8828 14)"
                  stroke="white"
                />
                <line
                  y1="-0.5"
                  x2="4"
                  y2="-0.5"
                  transform="matrix(0.720703 0.693244 0.693244 -0.720703 3 3.7229)"
                  stroke="white"
                />
                <line
                  x1="24.2294"
                  y1="4.08325"
                  x2="21.3466"
                  y2="6.85623"
                  stroke="white"
                />
                <path
                  d="M9 14L11.25 12L13.5 14L15.75 12L18 14"
                  stroke="white"
                />
              </svg>

              <div className={style.socialLogin} onClick={openSocialLogin}>
                {email ? email : "로그인"}
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
