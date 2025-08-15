import { useState } from "react";

function RegistrationForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
  });

  const handleChange = () => {
    const { name, value } = event.target;

    setFormState((prevFormData) => {
      return { ...prevFormData, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    alert(
      `Submitted Username: ${formState.username}\nSubmitted Email: ${formState.email}`
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="username" className="form-label">
          Username:
        </label>
        <input
          value={formState.username}
          type="text"
          name="username"
          id="username"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email:
        </label>
        <input
          value={formState.email}
          type="text"
          name="email"
          id="email"
          className="form-control"
          onChange={handleChange}
        />
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>

      <p>Current Username: {formState.username}</p>
      <p>Current Email: {formState.email}</p>
    </form>
  );
}

export default RegistrationForm;
