import type { ButtonProps } from "../util/interfaces";

const AppButton = ({ title, type }: ButtonProps) => {
  return (
    <button type={type} className="button">
      {title}
    </button>
  );
};

export default AppButton;
