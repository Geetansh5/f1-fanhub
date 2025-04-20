import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/home');
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Sign Up</h2>
      <input placeholder="Email" onChange={e => setEmail(e.target.value)} /><br />
      <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} /><br />
      <button onClick={handleSignup}>Sign Up</button>
      <p>Already have an account? <Link to="/">Login</Link></p>
    </div>
  );
}

export default Signup;





