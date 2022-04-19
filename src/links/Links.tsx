import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
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
    return (
      linkUpdated.status === 200 &&
      setLinksLists(
        linksList.map((link) => {
          const newLink = link;
          if (link.id === id) {
            newLink.active = data.active;
          }
          return link;
        })
      )
    );
  };

  useEffect(() => {
    getLinks();
  }, []);

  return (
    <div className="links">
      <div className="links__header">
        <h1>My Links</h1>
        <NavLink
          className="links__newLink neumOutset"
          to="/admin/links/newLink"
        >
          Add new link
        </NavLink>
      </div>
      {linksList &&
        linksList.map((link) => (
          <Link key={link.id} {...link} onUpdate={updateLink} />
        ))}
    </div>
  );
}

export default Links;
