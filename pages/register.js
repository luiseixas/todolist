import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Register() {
  const  [username, setUsername] = useState('');
  const  [password, setPassword] = useState('');

  const register = (e) => {
    e.preventDefault();
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
  };
    return (
      <div className={styles.container}>
        <h1>Register</h1>
        <form onSubmit={register}>
          <input
            onChange={(e) =>setUsername(e.target.value)} 
            placeholder="username" />
          <br />
          <input
            type='password'
            onChange={(e) =>setPassword(e.target.value)}  
            placeholder="password" />
          <br />
          <button type='submit'>Register</button>
        </form>
      </div>
    )
}