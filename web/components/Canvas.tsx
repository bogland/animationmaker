import React, { useEffect } from "react";
import useCanvas from "./useCanvas";
import style from "./canvas.module.scss";
type Props = {};

const Canvas = (props: Props) => {
  const { canvasRef, canvasWrapRef, drawStart, draw, drawStop } = useCanvas();
  useEffect(() => {
    // window.addEventListener("pointermove", function (e) {
    //   const events = e.getCoalescedEvents();
    //   for (const e of events) {
    //     // console.log(events.length);
    //     draw(e);
    //   }
    // });
  }, []);

  return (
    <>
      <section
        ref={canvasWrapRef}
        className={style.canvasWrap}
        onMouseDown={drawStart}
        onMouseUp={drawStop}
        onPointerMove={draw}
      >
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
