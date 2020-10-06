import React, { useState, useContext } from "react";
import { LinkContext } from "../../../providers/link.provider.js";
import { LocationContext } from "../../../providers/location.provider.js";
import "./index.scss";

function Settings() {
  const { createLink, delleteLink, links } = useContext(LinkContext);
  const { getLocatons } = useContext(LocationContext);
  const [link, setLink] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    createLink(link);
    getLocatons();
  };

  return (
    <div className="Settings">
      <div>
        <form onSubmit={handleSubmit} className="Inputs">
          <label htmlFor="Linkname">Add Link</label>
          <input
            type="text"
            className="Input"
            id="Linkname"
            onChange={e => setLink(e.target.value)}
            name="Linkname"
          ></input>
        </form>
        {links.map((link, index) => (
          <div className="LinkAdress" key={index}>
            <p> {link.link}</p>
            <button
              className="DelleteLink"
              key={index}
              index={index}
              link={link}
              onClick={() => delleteLink(index)}
            >
              x
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Settings;
