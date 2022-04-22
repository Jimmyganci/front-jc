import { TypeInput, TypeTheme } from "../../types/types";

function Input({
  type,
  placeHolder,
  name,
  watch,
  required,
  register,
  selectData,
}: //   defaultValue,
TypeInput) {
  return (
    // include validation with required or other standard HTML validation rules
    <div className="inputMap">
      {type !== "select" && (
        <input
          autoComplete="off"
          type={type}
          name={name}
          className="input neumInset"
          placeholder={placeHolder}
          {...register(name as any, {
            required: `${name} is required!`,
            validate:
              name === "newPassword"
                ? (val: string) =>
                    watch("password") === val || `Password fields don't match`
                : "",
          })}
        />
      )}
      {type === "select" && (
        <select
          className="select neumOutset"
          name={name}
          {...register(name as any, { required })}
        >
          <option value="">Select your theme</option>
          {selectData &&
            selectData.map((data: TypeTheme) => (
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
