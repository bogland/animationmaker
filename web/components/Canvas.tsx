import React from "react";
import useCanvas from "./useCanvas";
import style from "./canvas.module.scss";
type Props = {};

const Canvas = (props: Props) => {
  const { canvasRef, canvasWrapRef, drawStart, draw, drawStop } = useCanvas();
  return (
    <>
      <section
        ref={canvasWrapRef}
        onMouseDown={drawStart}
        onMouseMove={draw}
        onMouseUp={drawStop}
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
