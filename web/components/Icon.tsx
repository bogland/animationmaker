import React from "react";
import Icons, { IconType } from "assets";
import style from "./Icon.module.scss";
import { useRecoilState } from "recoil";
import { iconsState } from "./MenuTool";
class Props {
  type: string = Icons.ic_brush_off;
  active: boolean = false;
  index: number = 0;
}

const Icon = (props: Props) => {
  const [stateList, setState] = useRecoilState(iconsState);
  const type: string = `ic_${props.type + (props.active ? "_on" : "_off")}`;
  const onButtonChange = () => {
    const list = new Array(stateList.length);
    list[props.index] = true;
    setState(list);
  };
  return (
    <>
      <div onClick={onButtonChange} className={style.icon_border}>
        <img src={Icons[type]}></img>
      </div>
    </>
  );
};

export default Icon;
