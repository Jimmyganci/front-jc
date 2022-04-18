import { TypeInput } from "../../types/types";

function Input({ type, placeHolder, name, required, register }: TypeInput) {
  return (
    // include validation with required or other standard HTML validation rules
    <input
      autoComplete="off"
      type={type}
      className="input neumInset"
      placeholder={placeHolder}
      {...register(name as any, { required })}
    />
  );
}

export default Input;
