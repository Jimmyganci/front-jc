import { themes } from "../api/requests";
import Form from "../layouts/form/Form";
import formTheme from "./themeData";

function CreateTheme() {
  return (
    <div className="createTheme">
      <h1>Create new theme</h1>
      <Form
        dataForm={formTheme}
        className="createTheme__form"
        urlDestination="/admin/themes"
        onSubmitRequest={themes.createTheme}
      />
    </div>
  );
}

export default CreateTheme;
