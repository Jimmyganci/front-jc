import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { TypeTheme } from "../types/types";

type LinkProps = {
  id: number;
  name: string;
  onUpdate: (id: number, data: TypeTheme) => {};
  active: boolean;
};

function Theme({ id, name, active, onUpdate }: LinkProps) {
  return (
    <Suspense fallback="Wait">
      <div key={id} className="link neumInset">
        <p>{id}</p>
        <p>{name}</p>
        <div className="link__buttons">
          <button
            onClick={() =>
              onUpdate(id, {
                id,
                name,
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
              to={`/admin/themes/editTheme/${id}`}
            >
              Edit
            </NavLink>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Theme;
