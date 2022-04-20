import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { themes } from "../api/requests";
import Button from "../layouts/button/Button";
import Form from "../layouts/form/Form";
import { TypeTheme } from "../types/types";
// import { TypeLink } from "../types/types";
import formTheme from "./themeData";

function EditTheme() {
  const { id } = useParams();
  const [themeData, setThemeData] = useState<TypeTheme>();
  const navigate: NavigateFunction = useNavigate();

  // get one link with id in params
  const getTheme = async () => {
    const theme = await themes.getOneTheme(Number(id));
    setThemeData(theme);
  };

  // delete link with id in the params
  const deleteTheme = async () => {
    const deletedTheme = await themes.deleteTheme(Number(id));
    return deletedTheme.status === 200 && navigate("/admin/themes");
  };

  useEffect(() => {
    getTheme();
  }, []);
  return (
    <div className="editLink">
      <h1>Edit my link</h1>
      {themeData && (
        //   cf component Form to have any explanation about this component
        <Form
          className="editLink__form"
          onSubmitRequest={themes.updateTheme}
          defaultValues={themeData}
          idParams={id}
          dataForm={formTheme}
          urlDestination="/admin/themes"
        />
      )}
      <Button
        type="submit"
        onClick={deleteTheme}
        className="errorTxt"
        name="Delete definitly"
      />
    </div>
  );
}

export default EditTheme;
