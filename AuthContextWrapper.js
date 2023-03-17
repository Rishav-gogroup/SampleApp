import React, {useState, useEffect} from 'react';
import AuthContextProvider from './src/context/AuthContextProvider';
import App from './App';

export default function AuthContextWrapper() {
  return (
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  );
}
