import React, { useState } from "react";

const NameContext = React.createContext({});

function NameProvider({ children }) {
    const [name, setName] = useState("Settings");


    const createName = name => {
        setName(name);
        localStorage.setItem("Name", name);
    };



    return (
        <NameContext.Provider value={{ createName, name }}>
            {children}
        </NameContext.Provider>
    );
}

export { NameProvider, NameContext };
