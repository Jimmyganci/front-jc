import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { TypeUser } from "../types/types";

type UserProps = {
  id: number;
  email: string;
  password: string;
  onUpdate: (id: number, data: TypeUser) => {};
  active: boolean;
  firstname: string;
  lastname: string;
  admin: boolean;
};

function User({
  id,
  email,
  password,
  active,
  firstname,
  lastname,
  onUpdate,
  admin,
}: UserProps) {
  return (
    <Suspense fallback="Wait">
      <div key={id} className="link neumInset">
        <p>{id}</p>
        <p>{email}</p>
        <div className="link__buttons">
          <button
            onClick={() =>
              onUpdate(id, {
                id,
                email,
                password,
                active: !active,
                firstname,
                lastname,
                admin,
              })
            }
            type="button"
            className={`neumOutset ${active ? "validBg" : "errorBg"}`}
          >
            {active ? "ON" : "OFF"}
          </button>
          <button
            onClick={() =>
              onUpdate(id, {
                id,
                email,
                password,
                firstname,
                active,
                lastname,
                admin: !admin,
              })
            }
            type="button"
            className={`neumOutset ${admin ? "validBg" : "errorBg"}`}
          >
            {admin ? "Admin" : "User"}
          </button>
          <div>
            <NavLink
              className="link__edit neumOutset"
              to={`/admin/users/editUser/${id}`}
            >
              Edit
            </NavLink>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default User;
