import React, { useContext } from "react";
import "./index.scss";
import { NameContext } from "../../../providers/name.provider.js";
import { ModalContext } from "../../../providers/modal.provider.js";

function Footer() {
  const { name } = useContext(NameContext);
  const { toggleModal, isOpen } = useContext(ModalContext);
  return (
    <div className={!isOpen ? "Creator Footer" : undefined}>
      <button onClick={toggleModal} className="Creator">{localStorage.getItem("Name") || name}</button>
    </div>
  );
}

export default Footer;
