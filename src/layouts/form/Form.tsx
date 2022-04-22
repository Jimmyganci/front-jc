import { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {
  TypeFormLogin,
  TypeInputLogin,
  TypeLink,
  TypeTheme,
  TypeUser,
} from "../../types/types";
import Input from "../input/Input";

type TypeForm = TypeInputLogin;
type TypeData = TypeFormLogin[];

//  the form component allows to be use in all situation for every form
// to be used, we need to have different props: dataForm(initialvalues), className for the style, dataSelect if select or radio
// , onSubmitRequest: a function for your request database, idParams to update or delete; urlDestination if you want
// to redirect, defaultValues if you want to put the values in your input

function Form({
  dataForm,
  className,
  dataSelect = [],
  onSubmitRequest,
  idParams,
  urlDestination,
  defaultValues,
  children,
}: {
  dataForm: TypeData;
  className: string;
  dataSelect?: TypeTheme[];
  onSubmitRequest: any;
  idParams?: string;
  urlDestination: string;
  defaultValues?: TypeLink | TypeTheme | TypeUser;
  children?: any;
}) {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<TypeForm | TypeLink>({ defaultValues });

  const navigate = useNavigate();
  const onSubmit: SubmitHandler<TypeForm | TypeLink> = (data) => {
    const params = idParams ? [idParams, data] : [data];
    return onSubmitRequest(...params).then(
      (res: any) => res.status === 200 && navigate(urlDestination)
    );
  };

  function convertToObj(key: any, value: any) {
    if (key.length !== value.length || key.length === 0 || value.length === 0) {
      return null;
    }
    return value.map((val: any, index: number) => ({
      ...val,
      value: key[index],
    }));
  }

  useEffect(() => {
    reset(defaultValues);
  }, [defaultValues]);

  return (
    <form className={className} onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      {dataForm.map((form) => (
        <div className="form__inputContainer" key={form.name}>
          <Input
            watch={watch}
            {...form}
            selectData={dataSelect.length && dataSelect}
            register={register}
          />
          {/* errors will return when field validation fails with the keys of object errors compared to the name  */}
          {Object.keys(errors).includes(form.name) && (
            <p className="form__inputContainer--error">
              {convertToObj(Object.keys(errors), Object.values(errors)).map(
                (error: any) => error.value === form.name && error.message
              )}
            </p>
          )}
        </div>
      ))}
      {children}

      <input className="form__btn" type="submit" />
    </form>
  );
}

export default Form;
