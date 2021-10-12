import React from "react";
import style from "./index.module.scss";

type Props = {};

const index = (props: Props) => {
  return (
    <>
      <div className={style.container}>
        <div className={style.box}>
          <div className={style.dream}>
            <img src="/test/imagegrid/1.jpg" />
            <img src="/test/imagegrid/2.jpg" />
            <img src="/test/imagegrid/3.jpg" />
            <img src="/test/imagegrid/4.jpg" />
            <img src="/test/imagegrid/5.jpg" />
          </div>
          <div className={style.dream}>
            <img src="/test/imagegrid/6.jpg" />
            <img src="/test/imagegrid/7.jpg" />
            <img src="/test/imagegrid/8.jpg" />
            <img src="/test/imagegrid/9.jpg" />
            <img src="/test/imagegrid/10.jpg" />
          </div>
          <div className={style.dream}>
            <img src="/test/imagegrid/11.jpg" />
            <img src="/test/imagegrid/12.jpg" />
            <img src="/test/imagegrid/13.jpg" />
            <img src="/test/imagegrid/14.jpg" />
            <img src="/test/imagegrid/15.jpg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
