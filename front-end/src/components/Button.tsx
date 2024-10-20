import { ButtonProps } from "../utils/types/general";

export function Button({style, content, onClick, Icon} :ButtonProps): JSX.Element {
    return (
      <button className={`flex-h-center button ${style}`} onClick={onClick}>
        <p>{content}</p>
        {Icon && <Icon className="button-icon"/>}
      </button>
    );
}