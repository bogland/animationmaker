import React from "react";
import Icons, { IconType } from "assets";
import style from "./Icon.module.scss";
import { useRecoilState } from "recoil";
import useDrawMode, { CursorState, IconsState } from "./useDrawMode";
class Props {
  type: CursorState = CursorState.Brush;
  isActive: boolean = false;
  index: number = 0;
}

const Icon = (props: Props) => {
  const { changeMode, getFileName } = useDrawMode();
  return (
    <>
      <div
        onClick={(v) => changeMode(props.index)}
        className={style.icon_border}
      >
        <img src={Icons[getFileName(props.index)]}></img>
      </div>
    </>
  );
};

export default Icon;
