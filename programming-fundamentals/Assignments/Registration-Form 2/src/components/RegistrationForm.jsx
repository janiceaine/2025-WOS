import { useState } from "react";

function RegistrationForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    funFact: "",
    favoriteLanguage: "",
    agreedToTerms: false,
  });

  const handleChange = () => {
    const { name, type, value, checked } = event.target;

    setFormState((prevFormData) => {
      return { ...prevFormData, 
        [name]: type === "checkbox" ? checked : value
    };
    });
  };

  const handleSubmit = (e) => {
    event.preventDefault();
    alert(
      `Submitted Username: ${formState.username}
      \nSubmitted Email: ${formState.email}
      \nSubmitted Fun Fact: ${formState.funFact}
      \nSubmitted Favorite Language: ${formState.favoriteLanguage}
      \nSubmitted Agreed to Terms: ${formState.agreedToTerms}`
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

      <div className="form-floating mb-3">
        <textarea 
        value={formState.funFact} 
        type="text" 
        className="form-control" 
        placeholder="Leave a Fun Fact here" 
        id="funFact" 
        name="funFact" 
        style={{height: 100}} 
        onChange={handleChange}
        />
        <label htmlFor="funFact" className="form-label">Fun Fact About You:</label>
      </div> 

      <div className="mb-3">
        <label htmlFor="favoriteLanguage" className="form-label">
            Favorite Language:
        </label>
        <select value={formState.favoriteLanguage} name="favoriteLanguage" id="favoriteLanguage" className="form-select" onChange={handleChange}>
            <option value="None" className="value">Please select a language</option>
            <option value="HTML" className="value">HTML</option>
            <option value="CSS" className="value">CSS</option>
            <option value="SQL" className="value">SQL</option>
            <option value="JavaScript" className="value">JavaScript</option>
            <option value="C#" className="value">C#</option>
            <option value="Python" className="value">Python</option>
        </select>
      </div>

      <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" name="agreedToTerms" id="agreedToTerms" checked={formState.agreedToTerms} onChange={handleChange}/>
        <label htmlFor="agreedToTerms" className="form-check-label">
            I agree to terms
        </label>
      </div>

      <div className="text-end">
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </div>

      <hr />

      <div className="p-4">
          <p>Current Username: {formState.username}</p>
          <p>Current Email: {formState.email}</p>
          <p>Current Fun Fact: {formState.funFact}</p>
          <p>Current Favorite Langauge: {formState.favoriteLanguage}</p>
          <p>Agreed to Terms: {formState.agreedToTerms ? "Yes" : "No"}</p>
      </div>
    </form>
  );
}

export default RegistrationForm;
