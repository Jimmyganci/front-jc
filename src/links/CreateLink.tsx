import { useEffect, useState } from "react";
import { links, themes } from "../api/requests";
import Form from "../layouts/form/Form";
import { TypeTheme } from "../types/types";
import formLink from "./linkData";

function CreateLink() {
  const [themesData, setThemesData] = useState<TypeTheme[]>([]);

  const getAllThemes = async () => {
    const allThemes = await themes.getAllThemes();
    setThemesData(allThemes);
  };

  useEffect(() => {
    getAllThemes();
  }, []);
  return (
    <Form
      className="createLink"
      onSubmitRequest={links.createLink}
      dataForm={formLink}
      dataSelect={themesData}
      urlDestination="/admin/links"
    />
  );
}

export default CreateLink;
