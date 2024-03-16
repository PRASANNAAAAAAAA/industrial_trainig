import React, { useState } from 'react';
const LoginForm = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(username, password);
    };
  return (
    <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
        <br></br><br></br>
        <label>Password:</label>
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
        <br></br><br></br>
        <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;