import './App.css'
import React from 'react';
import { AuthProvider } from './AuthContext';
import TopBar from './TopBar';
import LoginPanel from './LoginPanel';
import './App.css';



export default function App() {
  return (
    
      <div className="app">
        <AuthProvider>
        <TopBar />
        <LoginPanel />
        </AuthProvider>
      </div>
    
  );
}

 
