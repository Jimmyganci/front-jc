import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { users } from "../../api/requests";
import Button from "../../layouts/button/Button";
import Form from "../../layouts/form/Form";
import { TypeUser } from "../../types/types";
import formUser from "../userData";

function EditUser() {
  const { id } = useParams();
  const [userData, setUserData] = useState<TypeUser>();
  const navigate: NavigateFunction = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // get one link with id in params
  const getUser = async () => {
    const user = await users.getOneUser(Number(id));
    setUserData(user);
  };

  // delete link with id in the params
  const deleteUser = async () => {
    const deletedUser = await users.deleteUser(Number(id));
    return deletedUser.status === 200 && navigate("/admin/users");
  };

  useEffect(() => {
    getUser();
  }, []);
  return (
    <div className="editLink">
      <h1>Edit my link</h1>
      {userData && (
        //   cf component Form to have any explanation about this component
        <Form
          className="editLink__form"
          onSubmitRequest={users.updateUser}
          defaultValues={userData}
          idParams={id}
          dataForm={showPassword ? formUser : [formUser[0]]}
          urlDestination="/admin/users"
        >
          <Button
            onClick={() => setShowPassword(!showPassword)}
            name="Modify password"
            type="button"
            className="userBtnPassword"
          />
        </Form>
      )}
      <Button
        type="submit"
        onClick={deleteUser}
        className="errorTxt"
        name="Delete definitly"
      />
    </div>
  );
}

export default EditUser;
