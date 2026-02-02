import type { InputProps } from "../util/interfaces";

const AppInput = ({ value, onChange, placeholder }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="input"
    />
  );
};

export default AppInput;
