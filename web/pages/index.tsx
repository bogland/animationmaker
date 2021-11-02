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
              <div className={style.icon}>
                <svg
                  onClick={() => document.body.classList.toggle("bright")}
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5 20.5C25.5 21.6085 25.2753 22.37 24.9167 22.9053C24.5612 23.4358 24.0397 23.7955 23.3453 24.0385C22.6422 24.2845 21.7815 24.4036 20.7815 24.4578C19.9366 24.5036 19.0206 24.5021 18.0429 24.5006C17.864 24.5003 17.683 24.5 17.5 24.5C17.317 24.5 17.136 24.5003 16.9571 24.5006C15.9794 24.5021 15.0634 24.5036 14.2185 24.4578C13.2185 24.4036 12.3578 24.2845 11.6547 24.0385C10.9603 23.7955 10.4388 23.4358 10.0833 22.9053C9.7247 22.37 9.5 21.6085 9.5 20.5C9.5 16.0817 13.0817 12.5 17.5 12.5C21.9183 12.5 25.5 16.0817 25.5 20.5Z"
                    stroke="white"
                  />
                  <line x1="17.5" y1="7" x2="17.5" y2="11" stroke="white" />
                  <line x1="4" y1="20.5" x2="8" y2="20.5" stroke="white" />
                  <line
                    y1="-0.5"
                    x2="4"
                    y2="-0.5"
                    transform="matrix(-1 0 0 1 30.8828 21)"
                    stroke="white"
                  />
                  <line
                    y1="-0.5"
                    x2="4"
                    y2="-0.5"
                    transform="matrix(0.720703 0.693244 0.693244 -0.720703 7 10.7229)"
                    stroke="white"
                  />
                  <line
                    x1="28.2294"
                    y1="11.0833"
                    x2="25.3466"
                    y2="13.8562"
                    stroke="white"
                  />
                  <path
                    d="M13 21L15.25 19L17.5 21L19.75 19L22 21"
                    stroke="white"
                  />
                </svg>

                <svg
                  width="35"
                  height="35"
                  viewBox="0 0 35 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.5 20.5C25.5 21.6085 25.2753 22.37 24.9167 22.9053C24.5612 23.4358 24.0397 23.7955 23.3453 24.0385C22.6422 24.2845 21.7815 24.4036 20.7815 24.4578C19.9366 24.5036 19.0206 24.5021 18.0429 24.5006C17.864 24.5003 17.683 24.5 17.5 24.5C17.317 24.5 17.136 24.5003 16.9571 24.5006C15.9794 24.5021 15.0634 24.5036 14.2185 24.4578C13.2185 24.4036 12.3578 24.2845 11.6547 24.0385C10.9603 23.7955 10.4388 23.4358 10.0833 22.9053C9.7247 22.37 9.5 21.6085 9.5 20.5C9.5 16.0817 13.0817 12.5 17.5 12.5C21.9183 12.5 25.5 16.0817 25.5 20.5Z"
                    stroke="white"
                  />
                  <path
                    d="M13 21L15.25 19L17.5 21L19.75 19L22 21"
                    stroke="white"
                  />
                </svg>

                <div className={style.socialLogin} onClick={openSocialLogin}>
                  {email ? email : "로그인"}
                </div>
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
