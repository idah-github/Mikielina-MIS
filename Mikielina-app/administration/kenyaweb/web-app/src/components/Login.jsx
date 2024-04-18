import { useState } from 'react';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
  
    const handleLogin = async () => {
      try {
        const response = await fetch('http://127.0.0.1:8000/admission/login/', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password })
        });
  
        if (!response.ok) {
          const error = await response.json();
          setErrorMessage(error.message);
        }
      } catch (error) {
        setErrorMessage('An error occurred. Please try again later.');
      }
    };
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email,password);
      // alert('You have successfully registered');
    };
  
    return (
      <form onSubmit={handleSubmit}>
      <div>
        <h2>Login</h2>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </div>
        {errorMessage && <div>{errorMessage}</div>}
        <button  type ='submit' onClick={handleLogin}>Login</button>
      </div>
      </form>
    );
  }
  export default Login;
  
  
  