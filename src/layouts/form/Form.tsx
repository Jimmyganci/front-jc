import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { TypeFormLogin, TypeInputLogin, TypeTheme } from "../../types/types";
import Input from "../input/Input";

type TypeForm = TypeInputLogin;
type TypeData = TypeFormLogin[];

function Form({
  dataForm,
  className,
  dataSelect = [],
  onSubmitRequest,
  urlDestination,
}: {
  dataForm: TypeData;
  className: string;
  dataSelect?: TypeTheme[];
  onSubmitRequest: Function;
  urlDestination: string;
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<TypeForm>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeForm | TypeTheme> = (data) => {
    console.log(data);
    return onSubmitRequest(data).then(
      (res: any) => res.status === 200 && navigate(urlDestination)
    );
  };

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {dataForm.map((form) => (
        <div className="form__inputContainer" key={form.name}>
          <Input
            {...form}
            selectData={dataSelect.length && dataSelect}
            register={register}
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
