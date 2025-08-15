import { useState } from "react";

function SearchGlobe({ search, setSearch }) {
  const [error, setError] = useState("");

  function validateInput(value) {
    if (value === "") {
      setError("");
      return true;
    }

    if (value.length > 30) {
      setError("Search cannot exceed 30 characters.");
      return false;
    }

    const valid = Array.from(value).every((char) => {
      return (
        (char >= "a" && char <= "z") ||
        (char >= "A" && char <= "Z") ||
        (char >= "0" && char <= "9") ||
        char === " "
      );
    });

    if (!valid) {
      setError("Only letters, numbers, and spaces are allowed.");
      return false;
    }

    setError("");
    return true;
  }

  const handleOnChange = (event) => {
    const value = event.target.value;
    if (validateInput(value)) {
      setSearch(value);
    }
  };

  return (
    <div className="card shadow mt-3">
      <nav className="navbar">
        <div className="w-100 p-2">
          <form className="d-flex align-items-start input-group" role="search">
            <div className="input-group m-1">
              <input
                type="text"
                className="form-control"
                placeholder="Search countries"
                aria-label="Country name"
                value={search}
                onChange={handleOnChange}
              />
              <button
                className="btn btn-primary"
                type="button"
                id="button-addon2"
              >
                Search
              </button>
            </div>
          </form>
          {error && <small className="text-danger ms-2">{error}</small>}
        </div>
      </nav>
    </div>
  );
}

export default SearchGlobe;
