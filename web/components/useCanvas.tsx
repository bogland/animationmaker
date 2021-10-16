import React, { useEffect, useRef, useState } from "react";
import { atom, useRecoilState } from "recoil";
import useDrawMode, { CursorState, IconsState } from "./MenuTool/useDrawMode";

type Props = {};

const useCanvas = () => {
  const { curDrawMode: drawMode } = useDrawMode();
  const canvasWrapRef: any = useRef();
  const canvasRef: any = useRef();
  const [state, setState] = useState({
    onDraw: false,
  });
  useEffect(() => {
    // const ctx = canvasWrapRef.current.addEventListener(
    //   "mousedown",
    //   onCanvasClicked
    // );
  }, []);

  const drawStart = (e) => {
    // const ctx = canvasRef.current?.getContext("2d");
    // const { layerX: x, layerY: y } = e.nativeEvent; //mouseMove : e.nativeEvent
    // ctx.beginPath();
    // ctx.moveTo(x, y);
    state.onDraw = true;
  };

  const draw = (e: any) => {
    // console.log(e);
    if (!state.onDraw) return;
    const { layerX: x, layerY: y } = e.nativeEvent; //mouseMove : e.nativeEvent
    const ctx = canvasRef.current?.getContext("2d");
    ctx.save();
    if (drawMode == CursorState.Erase) {
      ctx.globalCompositeOperation = "destination-out";
    }
    ctx.fillStyle = "black";
    const brushSize = 2;
    // ctx.lineWidth = brushSize;
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2, false);
    ctx.fill();
    // ctx.lineTo(x, y);
    // ctx.stroke();
    // ctx.beginPath();
    // ctx.moveTo(x, y);
    ctx.restore();
  };

  const drawStop = () => {
    state.onDraw = false;
  };
  return { drawStart, canvasRef, canvasWrapRef, draw, drawStop };
};

export default useCanvas;
