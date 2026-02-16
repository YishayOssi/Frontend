import React, { useContext } from 'react';
import { AuthContext } from './AuthContext'; 


export default function TopBar(){
  const { operator } = useContext(AuthContext);
  let content;

  if (operator) {
    content = <p>מפעיל מחובר: {operator.name} ({operator.role})</p>; 
  } else {
    content = <p>נא להתחבר למערכת</p>;
  }

  return (
    <header className="top-bar">
      <h1>קונסולת ניהול מחסום</h1>
      <div className="user-info">
        {content} 
      </div>
    </header>
  );
};
