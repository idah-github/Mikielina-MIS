import { useState } from 'react';


function Register() {
  const [first_name,setName] = useState('')
  const [last_name,setLast] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/admission/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ first_name,last_name,email, password })
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
    console.log(first_name,last_name,email,password);
    // alert('You have successfully registered');
  };

  return (
    <form onSubmit={handleSubmit}>
    <div>
      <h2>Register</h2>
      <div>
        <label>FirstName:</label>
        <input type="first_name" value={first_name} onChange={e => setName(e.target.value)} />
      </div>
      <div>
        <label>LastName:</label>
        <input type="last_name" value={last_name} onChange={e => setLast(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
      </div>
      {errorMessage && <div>{errorMessage}</div>}
      <button  type='submit' onClick={handleRegister}>Register</button>
    </div>
    {/* <input type="submit"/> */}
    </form>
  );
}
export default Register;

