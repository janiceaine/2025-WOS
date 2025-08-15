import { useState } from "react";

function AddTune({ onAddTune }) {
  const [formState, setFormState] = useState({
    title: "",
    artist: "",
  });

  const [formError, setFormError] = useState({
    title: "",
    artist: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBlur = (event) => {
    const { name, value } = event.target;

    let caughtError = "";

    if (value.trim().length === 0) {
      caughtError = `${name} cannot be Empty.`;
    } else if (value.trim().length < 3) {
      caughtError = `${name} name must be at least 3 characters.`;
    } else {
      caughtError = "";
    }
    setFormError((prevError) => ({
      ...prevError,
      [name]: caughtError,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const hasErrors = {};
    Object.entries(formState).forEach(([key, value]) => {
      if (value.trim().length === 0) {
        hasErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } cannot be empty.`;
      } else if (value.trim().length < 3) {
        hasErrors[key] = `${
          key.charAt(0).toUpperCase() + key.slice(1)
        } must be at least 3 characters.`;
      } else {
        hasErrors[key] = "";
      }
    });

    setFormError(hasErrors);

    const hasError = Object.values(hasErrors).some((err) => err !== "");
    if (hasError) return;

    const track = {
      id: crypto.randomUUID(),
      title: formState.title.trim(),
      artist: formState.artist.trim(),
    };

    onAddTune(track);

    setFormState({ title: "", artist: "" });
  };

  return (
    <div className="card p-3 mb-3">
      <form role="search" onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            value={formState.title}
            type="text"
            name="title"
            id="title"
            placeholder="Title"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formError.title && (
            <small className="text-danger">{formError.title}</small>
          )}
        </div>

        <div className="mb-3">
          <input
            value={formState.artist}
            type="text"
            name="artist"
            id="artist"
            placeholder="Artist"
            className="form-control"
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {formError.artist && (
            <small className="text-danger">{formError.artist}</small>
          )}
        </div>

        <div className="text-end">
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddTune;
