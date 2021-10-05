import React from "react";
import { atom, useRecoilState } from "recoil";
import Icon from "./Icon";
import style from "./MenuTool.module.scss";

type Props = {};

export const iconsState = atom({
  key: "iconsState", // unique ID (with respect to other atoms/selectors)
  default: [false, false, false], // default value (aka initial value)
});

const MenuTool = (props: Props) => {
  const [stateList, setState] = useRecoilState(iconsState);

  return (
    <div className={style.wrap}>
      <Icon index={0} active={stateList[0]} type={"brush"}></Icon>
      <Icon index={1} active={stateList[1]} type={"erase"}></Icon>
      <Icon index={2} active={stateList[2]} type={"paint"}></Icon>
    </div>
  );
};

export default MenuTool;
