import { IconType } from "react-icons";

export type LinkObject = {
  to: string;
  page: string;
};

export type ButtonProps = {
  style: string;
  content: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  Icon?: IconType;
};

export type ButtonIconProps = {
  style: string;
  Icon: IconType;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
};
