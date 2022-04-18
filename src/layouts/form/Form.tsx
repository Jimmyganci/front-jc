import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TypeFormLogin, TypeInputLogin } from "../../types/types";

type TypeForm = TypeInputLogin;
type TypeData = TypeFormLogin[];

function Form({
  dataForm,
  onSubmitRequest,
  urlDestination,
}: {
  dataForm: TypeData;
  onSubmitRequest: Function;
  urlDestination: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeForm>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeForm> = (data) =>
    onSubmitRequest(data).then(
      (res: any) => res.status === 200 && navigate(urlDestination)
    );

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {dataForm.map((form) => (
        <div className="form__inputContainer" key={form.name}>
          {/* include validation with required or other standard HTML validation rules */}
          <input
            autoComplete="off"
            type={form.name}
            className="form__inputContainer--inpt"
            placeholder={form.placeHolder}
            {...register(form.name as any, { required: form.required })}
          />
          {/* errors will return when field validation fails with the keys of object errors compared to the name  */}
          {Object.keys(errors).includes(form.name) && (
            <p className="form__inputContainer--error">{form.messageError}</p>
          )}
        </div>
      ))}

      <input className="form__btn" type="submit" />
    </form>
  );
}

export default Form;
