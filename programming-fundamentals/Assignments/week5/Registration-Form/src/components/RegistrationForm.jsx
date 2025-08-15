import { useState } from 'react';

function RegistrationForm() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    funFact: "",
    favoriteLanguage: "",
    agreedToTerms: false,
  });

  const [usernameError, setUsernameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [funFactError, setFunFactError] = useState('');
  const [favoriteLanguageError, setFavoriteLanguageError] = useState('');
  const [termsError, setTermsError] = useState('');

  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, type, value, checked } = event.target;

    setFormState((prevFormData) => {
      return { ...prevFormData, 
        [name]: type === "checkbox" ? checked : value
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setUsernameError('');
    setEmailError('');
    setFunFactError('');
    setFavoriteLanguageError('');
    setTermsError('');

    let isValid = true;

    if(isFormSubmitted === true) {
        alert(`Form already submitted.`)
        // return;
    };
    
    if(formState.username.trim() === '') {
        setUsernameError('Username is required');
        isValid = false;
    } else if (formState.username.trim().length < 3) {
        setUsernameError('Username must be at least three characters.');
        isValid = false;
    }

    if(formState.email === '') {
        setEmailError('Email is required')
        isValid = false;
    } else if (!formState.email.includes('@')) {
        setEmailError('Invalid Email format.')
        isValid = false;
    }

    if(formState.agreedToTerms === false) {
        setTermsError('You must agree to the terms and conditions.')
        isValid = false;
    }

    if(formState.funFact === '') {
        setFunFactError('Fun section can not be left empty.')
        isValid = false;
    } else if (formState.funFact.length > 250) {
        setFunFactError('You are doing too much now, type less!')
        isValid = false;
    }

    if(formState.favoriteLanguage === '' || formState.favoriteLanguage === 'None') {
        setFavoriteLanguageError('Please select you favorite language.') 
        isValid = false;
    }

    if(isValid === false) {
        alert(`Please complete the form!`);
        return;
    }

    setIsFormSubmitted(true);

    alert(
      `Submitted Username: ${formState.username}
      \nSubmitted Email: ${formState.email}
      \nSubmitted Fun Fact: ${formState.funFact}
      \nSubmitted Favorite Language: ${formState.favoriteLanguage}
      \nSubmitted Agreed to Terms: ${formState.agreedToTerms}
      \nSubmitted Form: Thank you for filling the Form! 🎉`
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
        {usernameError && <p style={{ color: 'red', fontSize: '0.8em' }}>{usernameError}</p>}
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
        {emailError && <p style={{ color: 'red', fontSize: '0.8em' }}>{emailError}</p>}
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
        {funFactError && <p style={{ color: 'red', fontSize: '0.8em' }}>{funFactError}</p>}
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
        {favoriteLanguageError && <p style={{ color: 'red', fontSize: '0.8em' }}>{favoriteLanguageError}</p>}
      </div>

      <div className="form-check mb-3">
        <input type="checkbox" className="form-check-input" name="agreedToTerms" id="agreedToTerms" checked={formState.agreedToTerms} onChange={handleChange}/>
        <label htmlFor="agreedToTerms" className="form-check-label">
            I agree to terms
        </label>
        {termsError && <p style={{ color: 'red', fontSize: '0.8em' }}>{termsError}</p>}
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
