import React, { useEffect, useRef, useState } from "react";
import style from "./index.module.scss";

type Props = {};

enum CursorState {
  Idle = 0,
  Brush = 1,
}

const index = (props: Props) => {
  const canvasWrapRef: any = useRef();
  const canvasRef: any = useRef();
  const [state, setState] = useState({
    cursorState: CursorState.Idle,
  });
  useEffect(() => {
    // const ctx = canvasWrapRef.current.addEventListener(
    //   "mousedown",
    //   onCanvasClicked
    // );
  }, []);
  const drawStart = () => {
    state.cursorState = CursorState.Brush;
  };
  const draw = (e: any) => {
    if (state.cursorState != CursorState.Brush) return;
    const { layerX: x, layerY: y } = e.nativeEvent;
    const ctx = canvasRef.current?.getContext("2d");
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 35, 0, Math.PI * 2, false);
    ctx.fill();
  };

  const drawStop = () => {
    state.cursorState = CursorState.Idle;
  };
  return (
    <>
      123
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

export default index;
