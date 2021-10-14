import React from "react";
import style from "./index.module.scss";
type Props = {};

const pinterest = (props: Props) => {
  return (
    <>
      <div className={style.pin_container}>
        <div className={`${style.card} ${style.card_small}`}>
          <img src="https://i.pinimg.com/236x/cc/43/26/cc432607b3bb8dcb0188c90e5989ac8b.jpg" />
        </div>
        <div className={`${style.card} ${style.card_small}`}></div>
        <div className={`${style.card} ${style.card_small}`}></div>
        <div className={`${style.card} ${style.card_medium}`}>
          <img src="/test/imagegrid/1.jpg" />
        </div>
        <div className={`${style.card} ${style.card_large}`}>
          <img src="/test/imagegrid/1.jpg" />
        </div>
        <div className={`${style.card} ${style.card_medium}`}></div>
        <div className={`${style.card} ${style.card_small}`}></div>
        <div className={`${style.card} ${style.card_large}`}></div>
        <div className={`${style.card} ${style.card_medium}`}></div>
        <div className={`${style.card} ${style.card_small}`}></div>
        <div className={`${style.card} ${style.card_medium}`}></div>
        <div className={`${style.card} ${style.card_small}`}></div>
        <div className={`${style.card} ${style.card_medium}`}></div>
        <div className={`${style.card} ${style.card_large}`}></div>
        <div className={`${style.card} ${style.card_medium}`}></div>
        <div className={`${style.card} ${style.card_small}`}></div>
        <div className={`${style.card} ${style.card_medium}`}></div>
        <div className={`${style.card} ${style.card_large}`}></div>
      </div>
    </>
  );
};

export default pinterest;
