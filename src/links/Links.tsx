import { useEffect, useState } from "react";
import { links } from "../api/requests";
import { TypeLink } from "../types/types";

function Links() {
  const [linksList, setLinksLists] = useState<TypeLink[]>([]);

  const getLinks = async () => {
    const allLinks = await links.getAllLinks();
    setLinksLists(allLinks);
  };
  useEffect(() => {
    getLinks();
  }, []);
  return (
    <div>
      {linksList && linksList.map((link) => <p key={link.id}>{link.title}</p>)}
    </div>
  );
}

export default Links;
