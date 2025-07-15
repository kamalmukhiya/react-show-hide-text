// App.jsx
import React, { useState } from 'react';
import './App.css'; // Import the CSS

export const App = () => {
  const [showText, setShowText] = useState(false);

  const handleChange = () => {
    setShowText(prev => !prev); // Cleaner toggle
  };

  return (
    <div 
      style={{
        width: "250px",
        height: "250px",
        backgroundColor: "white",
        color: "black",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        borderRadius: "20px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
      }}
    >
      <button onClick={handleChange}>
        {showText ? "Hide Text" : "Show Text"}
      </button>

      <p className={`fade-text ${showText ? "show" : "hide"}`}>
        This is a hidden message.
      </p>
    </div>
  );
};

export default App;
