import React, { useState } from "react";

const LinkContext = React.createContext({});

function LinkProvider({ children }) {
  const [links, setLinks] = useState([]);

  const createLink = link => {
    const newLinks = [...links, { link }];
    setLinks(newLinks);
  };

  const delleteLink = index => {
    const newLinks = [...links];
    newLinks.splice(index, 1);
    setLinks(newLinks);
  };

  return (
    <LinkContext.Provider value={{ createLink, links, delleteLink }}>
      {children}
    </LinkContext.Provider>
  );
}

export { LinkProvider, LinkContext };
