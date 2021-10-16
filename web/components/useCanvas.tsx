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

  const drawStart = () => {
    state.onDraw = true;
  };

  const draw = (e: any) => {
    if (!state.onDraw) return;
    const { layerX: x, layerY: y } = e.nativeEvent;
    const ctx = canvasRef.current?.getContext("2d");
    ctx.save();
    if (drawMode == CursorState.Erase) {
      ctx.globalCompositeOperation = "destination-out";
    }
    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.arc(x, y, 35, 0, Math.PI * 2, false);
    ctx.fill();
    ctx.restore();
  };

  const drawStop = () => {
    state.onDraw = false;
  };
  return { drawStart, canvasRef, canvasWrapRef, draw, drawStop };
};

export default useCanvas;
