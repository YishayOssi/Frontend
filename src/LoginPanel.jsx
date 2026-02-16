import React, { useState, useContext } from 'react';
import { AuthContext } from './AuthContext';

export default function LoginPanel(){
  const { login } = useContext(AuthContext);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  

  async function handleLogin (){
    try {
      const response = await fetch('http://localhost:3010/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        login(data.operator, data.token);
      } else {
        alert(data.message || "שגיאה בהתחברות");
      }
    } catch (error) {
      alert("השרת לא מגיב, וודא שהפעלת את ה-Backend בפורט 3010");
    }
  };

  return (
    <div className="login-panel">
      <h2>כניסת מפעיל</h2>
      
      <div className="input-group">
        <input 
          type="text" 
          placeholder="שם משתמש" 
          value={username}
          onChange={(e) => setUsername(e.target.value)} 
        />
      </div>

      <div className="input-group">
        <input 
          type="password" 
          placeholder="סיסמה" 
          value={password}
          onChange={(e) => setPassword(e.target.value)} 
        />
      </div>

      <button onClick={handleLogin}>התחבר למערכת</button> 
    </div>
  );
};

 
