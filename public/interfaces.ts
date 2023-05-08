import { Brand } from './types';

export interface Option {
  href: string;
  option: string;
}

export interface ExtraStyle {
  [key: string]: string | number;
}

export interface AlertProps {
  msg: string;
  zIndex?: string;
  bgColor?: string;
  duration?: number;
  textColor?: string;
}

export interface FocalPoint {
  href: string;
  title: string;
}

export interface SubNavButton {
  top: number;
  text: string;
}

export interface SliderProps {
  width: number | string;
  marginLeft: number | string;
}

export interface CategoryIcons {
  kids: JSX.Element;
  health: JSX.Element;
  sports: JSX.Element;
  gadgets: JSX.Element;
  clothing: JSX.Element;
}

export interface Product {
  id: string;
  brand: Brand;
  name: string;
  image: string;
  price: number;
  rating: number;
}

export interface AppContextData {
  menuOpened: boolean;
  screenWidth: number;
  overlayOpened: boolean;
  MOBILE_BREAKPOINT: number;
  LAPTOP_BREAKPOINT: number;
  SMALL_MOBILE_BREAKPOINT: number;
  setMenuOpened?: React.Dispatch<React.SetStateAction<boolean>>;
  setOverlayOpened?: React.Dispatch<React.SetStateAction<boolean>>;
}
