import React, { useState, useContext } from "react";
import { LinkContext } from "../../../providers/link.provider.js";
import { WeatherContext } from "../../../providers/weather.provider.js";
import { NameContext } from "../../../providers/name.provider.js";
import { ModalContext } from "../../../providers/modal.provider.js";
import "./index.scss";

function Settings() {
  const { createName } = useContext(NameContext);
  const { toggleModal, isOpen } = useContext(ModalContext);
  const { createLink, delleteLink } = useContext(LinkContext);
  const { getWeather } = useContext(WeatherContext);
  const [link, setLink] = useState("");
  const [defaultname, setDefaultName] = useState("");
  const [errors, setErrors] = useState("");


  const local = JSON.parse(localStorage.getItem("Links"))

  // const handleLinkSubmit = e => {
  //   e.preventDefault();
  //   createLink(link);
  //   e.target.reset();
  // };

  const handleNameSubmit = e => {
    e.preventDefault();
    createName(defaultname);
    e.target.reset();
  };

  const handleDellete = index => {
    delleteLink(index);
  };


  const handleChange = e => {
    localStorage.setItem(`location`, `${e}`);
    getWeather();
  };

  const validate = e => {
    let isValid = true;
    setErrors("")
    if (!link.includes(".")) {
      setErrors("Neteisingas svetaines adresas");
      isValid = false;
    }
    return isValid;
  };


  const handleLinkSubmit = e => {
    e.preventDefault();
    if (validate()) {
      createLink(link)
    }
    e.target.reset();
  };

  return (
    <div className={isOpen ? "Open Settings" : undefined}  >
      <button onClick={toggleModal} className="Close">x</button>
      <div className="Options">
        <div>
          <form onSubmit={handleLinkSubmit} className="Inputs">
            <label htmlFor="Linkname">Įveskite svetainių pavadinimus:</label>
            <input
              type="text"
              className="Input"
              id="Linkname"
              onChange={e => setLink(e.target.value)}
              placeholder="www.facebook.com"
              name="Linkname"
            ></input>
            {!!errors && <div className="Input-error">{errors}</div>}
          </form>
          {local && local.map((link, index) => (
            <div className="DynamicList" key={index}>
              <p> {link.link}</p>
              <button
                className="DelleteLink"
                key={index}
                index={index}
                link={link}
                onClick={() => handleDellete(index)}
              >
                x
            </button>
            </div>
          ))}
        </div>
        <div className="Inputs">
          <label htmlFor="Location">Įveskite vietovės pavadinimą:</label>

          <select
            className="Select"
            name="Location"
            onChange={e => handleChange(e.target.value)}
            id="Location"
          >
            {/* <option></option> */}
            <option value="vilnius">Vilnius</option>
            <option value="kaunas">Kaunas</option>
            <option value="siauliai">Šiauliai</option>
            <option value="zarasai">Zarasai</option>
          </select>
        </div>


        <form onSubmit={handleNameSubmit} className="Inputs">
          <label htmlFor="Location">Įveskite norimą vardą:</label>

          <input
            type="text"
            className="Input"
            id="Name"
            onChange={e => setDefaultName(e.target.value)}
            name="Name"
            placeholder="Jonas"
          ></input>
          <p className="DynamicList">{localStorage.getItem("Name")}</p>
        </form>

      </div>
      {/* <div className="Contacts"><a herf="https://mariusmalaiska.github.io/Life-Description/">Created by Marius Malaiška</a></div> */}

      <a
        target="_blank"
        className="Contacts"
        rel="noopener noreferrer"
        href="https://mariusmalaiska.github.io/Life-Description/"
      >
        Created by Marius Malaiška
      </a>

    </div>
  );
}

export default Settings;
