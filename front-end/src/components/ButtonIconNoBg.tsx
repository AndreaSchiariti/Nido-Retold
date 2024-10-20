import { ButtonIconProps } from "../utils/types/general";

export function ButtonIconNoBg({
  style,
  Icon,
  onClick,
}: ButtonIconProps): JSX.Element {
  return (
    <button className={`button-no-bg ${style}`} onClick={onClick}>
      <div className="flex-h-center inner-button-no-bg">
        <Icon />
      </div>
    </button>
  );
}
