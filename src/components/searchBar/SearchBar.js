import React, { useEffect } from "react";

function SearchBar() {
  useEffect(() => {
    const input = document.querySelector(".form-control");
    const datalist = document.querySelector(`#${input.getAttribute("list")}`);

    input.addEventListener("input", () => {
      const value = input.value;
      const options = datalist.querySelectorAll("option");

      options.forEach((option) => {
        if (option.value.indexOf(value) !== -1) {
          option.hidden = false;
        } else {
          option.hidden = true;
        }
      });
    });
  }, []);

  return (
    <form
      className="form-inline my-2 my-lg-0"
      onSubmit={(event) => {
        event.preventDefault();
        const input = event.target.elements[0];
        const datalist = document.querySelector(
          `#${input.getAttribute("list")}`
        );
        const option = datalist.querySelector(
          `option[value^="${input.value}"]`
        );
        if (option) {
          input.value = option.value;
        }
        event.target.submit();
      }}
    >
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        autoComplete="off"
        list="search-options"
      />
      <datalist id="search-options">
        <option value="Skin products" />
        <option value="Hair Products" />
        <option value="Face Products" />
        <option value="dabur" />
        <option value="patanjali" />
        <option value="ayur med" />
      </datalist>
      <button className="btn btn-success my-2 my-sm-0" type="submit">
        Search
      </button>
    </form>
  );
}

export default SearchBar;
