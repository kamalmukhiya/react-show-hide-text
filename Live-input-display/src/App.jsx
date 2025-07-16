import React, { useState } from 'react';

export const App = () => {
  const [text, setText] = useState("");

  const changeHandle = (e) => {
    setText(e.target.value);
  };

  return (
    <div style={{
     
      marginTop: "100px"
    }}>
      <div style={{
        backgroundColor: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <label style={{
          fontWeight: 'bold',
          fontSize: '1.1rem',
          display: 'block',
          marginBottom: '10px',
          color: '#333'
        }}>
          Enter your text:
        </label>

        <input
          type="text"
          value={text}
          placeholder="Write something..."
          onChange={changeHandle}
          style={{
            width: '100%',
            padding: '10px 12px',
            borderRadius: '8px',
            border: '1px solid #ccc',
            fontSize: '1rem',
            marginBottom: '20px'
          }}
        />

        <div style={{
          backgroundColor: '#f9f9f9',
          padding: '10px',
          borderRadius: '6px',
          border: '1px solid #eee',
          color: '#555',
          fontSize: '1rem'
        }}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default App;
