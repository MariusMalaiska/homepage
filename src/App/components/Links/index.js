import React, { useContext } from "react";
import "./index.scss";
import { LinkContext } from "../../../providers/link.provider.js";
import Link from "../Link/index.js";

function Links() {
  const { links } = useContext(LinkContext);

  return (
    <div className="Links">
      {links.map((link, index) => (
        <Link key={index} index={index} link={link.link}></Link>
      ))}
    </div>
  );
}

export default Links;
