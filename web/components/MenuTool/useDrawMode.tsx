import React from "react";
import { atom, useRecoilState } from "recoil";

export enum CursorState {
  Idle = 0,
  Brush = 1,
  Erase = 2,
  Paint = 3,
}

export const IconsState = atom({
  key: "iconsState", // unique ID (with respect to other atoms/selectors)
  default: {
    curDrawMode: CursorState.Idle,
    stateList: [
      { type: CursorState.Idle, isActive: false },
      { type: CursorState.Brush, isActive: true },
      { type: CursorState.Erase, isActive: false },
      { type: CursorState.Paint, isActive: false },
    ],
  }, // default value (aka initial value)
});

// export const DrawModeState = atom({
//   key: "drawMode", // unique ID (with respect to other atoms/selectors)
//   default: CursorState.Idle, // default value (aka initial value)
// });

const useDrawMode = () => {
  const [iconsState, setIconsState] = useRecoilState(IconsState);
  const changeMode = (index: number) => {
    const state = iconsState.stateList.map((v, i) => {
      return {
        type: v.type,
        isActive: i == index ? true : false,
      };
    });
    setIconsState((v) => ({ curDrawMode: index, stateList: state }));
  };
  const curDrawMode = iconsState.curDrawMode;
  const getTypeName = (index: number) => {
    return Object.assign(CursorState)[index].toLowerCase();
  };
  const getFileName = (index: number) => {
    const isActive = iconsState.stateList[index].isActive;
    const fileName: string = `ic_${
      getTypeName(index) + (isActive ? "_on" : "_off")
    }`;
    return fileName;
  };
  return { changeMode, curDrawMode, getFileName };
};

export default useDrawMode;
