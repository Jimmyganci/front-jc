import { Suspense, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { themes } from "../api/requests";
import { TypeLink, TypeTheme } from "../types/types";
import bin from "../assets/icons/bin.png";

type LinkProps = {
  id: number;
  title: string;
  url: string;
  idTheme: number;
  onUpdate: (id: number, data: TypeLink) => {};
  active: boolean;
};

function Link({ id, title, url, idTheme, onUpdate, active }: LinkProps) {
  const [theme, setTheme] = useState<TypeTheme>();

  const getOneTheme = async () => {
    const oneTheme = await themes.getOneTheme(idTheme);
    setTheme(oneTheme);
  };

  useEffect(() => {
    getOneTheme();
  }, [idTheme]);
  return (
    <Suspense fallback="Wait">
      {active && (
        <div key={id} className="link neumInset">
          <p>{id}</p>
          <p>{title}</p>
          <p>{url}</p>
          {theme && <p>{theme.name}</p>}
          <button
            onClick={() =>
              onUpdate(id, {
                id,
                title,
                url,
                idTheme,
                active: false,
              })
            }
            type="button"
            className="neumOutset"
          >
            <img src={bin} alt="bin" />
          </button>
          <div>
            <NavLink
              className="link__edit neumOutset"
              to={`/admin/links/${id}`}
            >
              Edit
            </NavLink>
          </div>
        </div>
      )}
    </Suspense>
  );
}

export default Link;
