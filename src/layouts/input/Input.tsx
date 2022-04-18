import { TypeInput, TypeTheme } from "../../types/types";

function Input({
  type,
  placeHolder,
  name,
  required,
  register,
  selectData,
}: TypeInput) {
  return (
    // include validation with required or other standard HTML validation rules
    <div>
      {type !== "select" && (
        <input
          autoComplete="off"
          type={type}
          className="input neumInset"
          placeholder={placeHolder}
          {...register(name as any, { required })}
        />
      )}
      {type === "select" && (
        <select name={name} {...register(name as any, { required })}>
          <option value="">Select your theme</option>
          {selectData.map((data: TypeTheme) => (
            <option key={data.id} value={data.id}>
              {data.name}
            </option>
          ))}
        </select>
      )}
    </div>
  );
}

export default Input;
