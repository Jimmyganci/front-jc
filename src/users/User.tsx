import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { TypeUser } from "../types/types";

type UserProps = {
  id: number;
  email: string;
  password: string;
  onUpdate: (id: number, data: TypeUser) => {};
  active: boolean;
};

function User({ id, email, password, active, onUpdate }: UserProps) {
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
              })
            }
            type="button"
            className={`neumOutset ${active ? "validBg" : "errorBg"}`}
          >
            {active ? "ON" : "OFF"}
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
