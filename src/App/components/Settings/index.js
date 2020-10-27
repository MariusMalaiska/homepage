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


  const local = JSON.parse(localStorage.getItem("Links"))

  const handleLinkSubmit = e => {
    e.preventDefault();
    createLink(link);
    e.target.reset();
  };

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

  return (
    <div className={isOpen && "Open Settings"}  >
      <button onClick={toggleModal} className="Close">x</button>
      <div className="Options">
        <div>
          <form onSubmit={handleLinkSubmit} className="Inputs">
            <label htmlFor="Linkname">Add Link</label>
            <input
              type="text"
              className="Input"
              id="Linkname"
              onChange={e => setLink(e.target.value)}
              name="Linkname"
            ></input>
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
          <label htmlFor="Location">Choose location:</label>

          <select
            className="Select"
            name="Location"
            onChange={e => handleChange(e.target.value)}
            id="Location"
          >
            <option></option>
            <option value="vilnius">Vilnius</option>
            <option value="kaunas">Kaunas</option>
            <option value="siauliai">Šiauliai</option>
            <option value="zarasai">Zarasai</option>
          </select>
        </div>


        <form onSubmit={handleNameSubmit} className="Inputs">
          <label htmlFor="Location">Choose Name:</label>

          <input
            type="text"
            className="Input"
            id="Name"
            onChange={e => setDefaultName(e.target.value)}
            name="Name"
          ></input>
          <p className="DynamicList">{localStorage.getItem("Name")}</p>
        </form>

      </div>
      {/* <div className="Contacts"><a herf="https://mariusmalaiska.github.io/Life-Description/">Created by Marius Malaiška</a></div> */}

      <a
        className="Contacts"
        href="https://mariusmalaiska.github.io/Life-Description/"
      >
        Created by Marius Malaiška
      </a>

    </div>
  );
}

export default Settings;
