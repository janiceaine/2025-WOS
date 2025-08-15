
function LoginForm() {
    const [username, setUsername] = usState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

  return (
    <form>
        <div className="mb-3">
            <label htmlFor="username" className="form-label"></label>
            Username:
        </div>
        <input
            value={username}
            type="text"
            name="username"
            id="username"
            className="form-control"
            onChange={handleUsernameChange}
        />
       

    </form>
  )
}

export default LoginForm