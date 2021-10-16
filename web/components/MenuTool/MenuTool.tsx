import React from "react";
import { atom, useRecoilState } from "recoil";
import Icon from "./Icon";
import style from "./MenuTool.module.scss";
import { IconsState } from "./useDrawMode";

type Props = {};

const MenuTool = (props: Props) => {
  const [{ stateList }, setState] = useRecoilState(IconsState);
  return (
    <div className={style.wrap}>
      <Icon
        index={1}
        type={stateList[1].type}
        isActive={stateList[1].isActive}
      ></Icon>
      <Icon
        index={2}
        type={stateList[2].type}
        isActive={stateList[2].isActive}
      ></Icon>
      <Icon
        index={3}
        type={stateList[3].type}
        isActive={stateList[3].isActive}
      ></Icon>
    </div>
  );
};

export default MenuTool;
