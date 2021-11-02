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
    prev: { x: 0, y: 0 },
  });
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (drawMode == CursorState.Erase) {
      ctx.globalCompositeOperation = "destination-out";
    } else {
      ctx.globalCompositeOperation = "source-over";
    }
  }, [drawMode]);

  const drawStart = (e) => {
    state.prev = { x: e.layerX, y: e.layerY };
    state.onDraw = true;
    draw(e);
  };

  const draw = (e: any) => {
    if (!state.onDraw) return;
    const { layerX: x, layerY: y } = e; //mouseMove : e.nativeEvent
    const { x: preX, y: preY } = state.prev;
    const ctx = canvasRef.current?.getContext("2d");
    // ctx.save();

    console.log(ctx.globalCompositeOperation);
    ctx.fillStyle = "black";
    const brushSize = 1;
    ctx.beginPath();
    ctx.arc(x, y, brushSize, 0, Math.PI * 2, false);
    ctx.fill();

    ctx.lineWidth = brushSize * 2;
    ctx.lineCap = "round";

    ctx.beginPath();
    ctx.moveTo(preX, preY);
    ctx.lineTo(x, y);
    ctx.stroke();
    ctx.restore();

    state.prev = { x: x, y: y };
  };

  const drawStop = () => {
    state.onDraw = false;
  };
  return { drawStart, canvasRef, canvasWrapRef, draw, drawStop };
};

export default useCanvas;
