import { Suspense } from "react";
import { NavLink } from "react-router-dom";
import { TypeLink } from "../types/types";

type LinkProps = {
  id: number;
  title: string;
  url: string;
  idTheme: number;
  onUpdate: (id: number, data: TypeLink) => {};
  active: boolean;
};

function Link({ id, title, url, idTheme, onUpdate, active }: LinkProps) {
  return (
    <Suspense fallback="Wait">
      <div key={id} className="link neumInset">
        <p>{id}</p>
        <p>{title}</p>
        <div className="link__buttons">
          <button
            onClick={() =>
              onUpdate(id, {
                id,
                title,
                url,
                idTheme,
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
              to={`/admin/links/editLink/${id}`}
            >
              Edit
            </NavLink>
          </div>
        </div>
      </div>
    </Suspense>
  );
}

export default Link;
