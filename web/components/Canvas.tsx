import React, { useEffect } from "react";
import useCanvas from "./useCanvas";
import style from "./canvas.module.scss";
type Props = {};

const Canvas = (props: Props) => {
  const { canvasRef, canvasWrapRef, drawStart, draw, drawStop } = useCanvas();
  useEffect(() => {
    canvasWrapRef.current.addEventListener("pointermove", function (e) {
      const events = e.getCoalescedEvents();
      for (const e of events) {
        // console.log(events.length);
        draw(e);
      }
    });
    canvasWrapRef.current.addEventListener("mousedown", function (e) {
      drawStart(e);
    });
    canvasWrapRef.current.addEventListener("mouseup", function (e) {
      drawStop(e);
    });
  }, []);

  return (
    <>
      <section ref={canvasWrapRef} className={style.canvasWrap}>
        <canvas
          ref={canvasRef}
          className={style.canvas}
          width={1000}
          height={600}
        ></canvas>
      </section>
    </>
  );
};

export default Canvas;
