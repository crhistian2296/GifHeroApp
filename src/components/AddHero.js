import React, { useState } from "react";
import PropTypes from "prop-types";
import "../assets/sass/components/addHeroe.sass";

export default function AddHero({ setHeroes }) {
  const [inputValue, setInputValue] = useState(""); //useState tiene valor undefined por defecto
  // No es undefined por defecto, inputValue ahora mismo tiene por defecto un string vacío @ Julián

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length > 0) {
      setHeroes((initialState) => [inputValue, ...initialState]);
      setInputValue("");
    } else {
      console.error(
        "input void, please enter a hero name before submit your request"
      );
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        onChange={handleOnChange}
        placeholder="Search your gif here"
        type="text"
        value={inputValue}
        className="searcher"
      />
    </form>
  );
}

//validacion de requrimiento de setHeroes como proptype
AddHero.propTypes = {
  setHeroes: PropTypes.func.isRequired,
};
