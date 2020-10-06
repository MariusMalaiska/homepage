import React from "react";

import "./index.scss";

function Link(link) {
  return (
    <a
      className="Link"
      href={`http://` + link.link}
      data-before={link.link.split(".")[1]}
    >
      <h2 className="LinkName"> {link.link.charAt(4).toUpperCase()}</h2>
    </a>
  );
}

export default Link;
