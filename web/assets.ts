export type IconType = {
  ic_brush_off: string;
  ic_erase_off: string;
  ic_paint_off: string;
  ic_user_off: string;
  ic_brush_on: string;
  ic_erase_on: string;
  ic_paint_on: string;
  ic_user_on: string;
  ic_login_google: string;
  ic_close: string;
};

const Icons: IconType | { [key: string]: string } = {
  ic_brush_off: "/images/ic_brush_off.png",
  ic_erase_off: "/images/ic_erase_off.png",
  ic_paint_off: "images/ic_paint_off.png",
  ic_user_off: "/images/ic_user_off.png",
  ic_brush_on: "/images/ic_brush_on.png",
  ic_erase_on: "/images/ic_erase_on.png",
  ic_paint_on: "images/ic_paint_on.png",
  ic_user_on: "/images/ic_user_on.png",
  ic_login_google: "/images/ic_login_google.png",
  ic_close: "/images/ic_close.png",
};

export default Icons;
