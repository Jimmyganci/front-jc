import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { themes } from "../api/requests";
import { TypeTheme } from "../types/types";
import Theme from "./Theme";

function Themes() {
  const [themesList, setThemesList] = useState<TypeTheme[]>([]);

  const getAllTheme = async () => {
    const themesData = await themes.getAllThemes();
    setThemesList(themesData);
  };

  const updateTheme = async (id: number, data: TypeTheme) => {
    const linkUpdated = await themes.updateTheme(id, {
      ...data,
    });
    return (
      linkUpdated.status === 200 &&
      setThemesList(
        themesList.map((theme) => {
          const newTheme = theme;
          if (theme.id === id) {
            newTheme.active = data.active;
          }
          return theme;
        })
      )
    );
  };

  useEffect(() => {
    getAllTheme();
  }, []);
  return (
    <div className="themes">
      <div className="themes__header">
        <h1>My Themes</h1>
        <NavLink
          className="themes__newTheme neumOutset"
          to="/admin/themes/newTheme"
        >
          Add new theme
        </NavLink>
      </div>
      {themesList.map((theme) => (
        <Theme key={theme.id} {...theme} onUpdate={updateTheme} />
      ))}
    </div>
  );
}

export default Themes;
