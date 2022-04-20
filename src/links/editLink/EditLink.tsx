import { useEffect, useState } from "react";
import { NavigateFunction, useNavigate, useParams } from "react-router-dom";
import { links, themes } from "../../api/requests";
import Button from "../../layouts/button/Button";
import Form from "../../layouts/form/Form";
import { TypeLink, TypeTheme } from "../../types/types";
// import { TypeLink } from "../types/types";
import formLink from "../linkData";

function EditLink() {
  const { id } = useParams();
  const [themesData, setThemesData] = useState<TypeTheme[]>([]);
  const [linkData, setLinkData] = useState<TypeLink>();
  const navigate: NavigateFunction = useNavigate();

  // get one link with id in params
  const getLink = async () => {
    const link = await links.getOneLink(Number(id));
    setLinkData(link);
  };

  // get all themes
  const getAllThemes = async () => {
    const allThemes = await themes.getAllThemes();
    setThemesData(allThemes);
  };

  // delete link with id in the params
  const deleteLink = async () => {
    const deletedLink = await links.deleteLink(Number(id));
    return deletedLink.status === 200 && navigate("/admin/links/");
  };

  useEffect(() => {
    getAllThemes();
    getLink();
  }, []);
  return (
    <div className="editLink">
      <h1>Edit my link</h1>
      {linkData && (
        //   cf component Form to have any explanation about this component
        <Form
          className="editLink__form"
          onSubmitRequest={links.updateLink}
          defaultValues={linkData}
          idParams={id}
          dataForm={formLink}
          dataSelect={themesData}
          urlDestination="/admin/links"
        />
      )}
      <Button
        type="submit"
        onClick={deleteLink}
        className="errorTxt"
        name="Delete definitly"
      />
    </div>
  );
}

export default EditLink;
