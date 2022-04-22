import { users } from "../../api/requests";
import Form from "../../layouts/form/Form";
import formUser from "../userData";

function CreateUser() {
  return (
    <div className="createTheme">
      <h1>Create new user</h1>
      <Form
        dataForm={formUser}
        className="createTheme__form"
        urlDestination="/admin/users"
        onSubmitRequest={users.createUser}
      />
    </div>
  );
}

export default CreateUser;
