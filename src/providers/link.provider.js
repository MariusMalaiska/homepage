import React, { useState } from "react";

const LinkContext = React.createContext({});

function LinkProvider({ children }) {
  const [links, setLinks] = useState([]);


  const createLink = link => {
    const local = JSON.parse(localStorage.getItem("Links"))
    let start = local ? local : links
    const newLinks = [...start, { link }];
    setLinks(newLinks);
    localStorage.setItem("Links", JSON.stringify(newLinks));
  };



  const delleteLink = index => {
    const local = JSON.parse(localStorage.getItem("Links"))
    local.splice(index, 1);
    const newLinks = [...local];
    setLinks(newLinks);
    localStorage.removeItem("Links");
    localStorage.setItem("Links", JSON.stringify(newLinks));
  };


  return (
    <LinkContext.Provider value={{ createLink, links, delleteLink }}>
      {children}
    </LinkContext.Provider>
  );
}

export { LinkProvider, LinkContext };
