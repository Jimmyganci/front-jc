import { useEffect, useState } from "react";
import Link from "./Link";
import { links } from "../api/requests";
import { TypeLink } from "../types/types";

function Links() {
  const [linksList, setLinksLists] = useState<TypeLink[]>([]);

  const getLinks = async () => {
    const allLinks = await links.getAllLinks();
    setLinksLists(allLinks);
  };

  const updateLink = async (id: number, data: TypeLink) => {
    const linkUpdated = await links.updateLink(id, {
      ...data,
    });
    return linkUpdated;
  };
  useEffect(() => {
    getLinks();
  }, []);
  return (
    <div>
      {linksList &&
        linksList.map((link) => (
          <Link key={link.id} {...link} onUpdate={updateLink} />
        ))}
    </div>
  );
}

export default Links;
