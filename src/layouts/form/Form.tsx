import { useForm, SubmitHandler } from "react-hook-form";
import { TypeFormLogin, TypeInputLogin } from "../../types/types";

type TypeForm = TypeInputLogin;
type TypeData = TypeFormLogin[];

function Form({ dataForm }: { dataForm: TypeData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeForm>();
  const onSubmit: SubmitHandler<TypeForm> = (data) => console.log(data);
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {dataForm.map((form) => (
        <div key={form.name}>
          {/* include validation with required or other standard HTML validation rules */}
          <input
            autoComplete="off"
            type={form.name}
            className="form__inpt"
            placeholder={form.placeHolder}
            {...register(form.name as any, { required: form.required })}
          />
          {/* errors will return when field validation fails with the keys of object errors compared to the name  */}
          {Object.keys(errors).includes(form.name) && (
            <span>{form.messageError}</span>
          )}
        </div>
      ))}

      <input className="form__btn" type="submit" />
    </form>
  );
}

export default Form;
