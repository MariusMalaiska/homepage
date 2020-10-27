import React, { useState } from "react";

const ModalContext = React.createContext({});

function ModalProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);


    const toggleModal = () => {
        if (isOpen === false) {
            setIsOpen(true)
            console.log("open")
        } else {
            setIsOpen(false)
            console.log("close")
        }
    };





    return (
        <ModalContext.Provider value={{ toggleModal, isOpen }}>
            {children}
        </ModalContext.Provider>
    );
}

export { ModalProvider, ModalContext };
