import React, { useContext, useEffect } from "react";
import "./index.scss";
import { LinkContext } from "../../../providers/link.provider.js";
import Link from "../Link/index.js";

function Links() {
  const { links } = useContext(LinkContext);

  let local = JSON.parse(localStorage.getItem("Links"))


  // useEffect(() => {
  //   local = JSON.parse(localStorage.getItem("Links"))
  // }, [links]);


  return (
    <div className="Links">
      {local && local.map((link, index) => (
        <Link key={index} index={index} link={link.link}></Link>

      ))}
    </div>
  );
}

export default Links;
