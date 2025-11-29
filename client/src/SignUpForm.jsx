// client/src/SignUpForm.jsx

import React, { useState } from 'react';

function SignUpForm() {
  const [formData, setFormData] = useState({ name: '', email: '', game1: '', game2: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('Submitting...');
    try {
      const response = await fetch('http://localhost:3001/api/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          gamesPicked: [formData.game1, formData.game2] // Array format for the API
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('SUCCESS! You have signed up. Check your email for your match time.');
        setFormData({ name: '', email: '', game1: '', game2: '' }); // Clear form
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('Network error. Is the server running?');
      console.error('Fetch error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>The Gauntlet Challenge Sign-Up</h2>
      <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
      
      <h3>Your Two Challenger Picks:</h3>
      <input type="text" name="game1" placeholder="Game 1 (Your Best Game)" value={formData.game1} onChange={handleChange} required />
      <input type="text" name="game2" placeholder="Game 2 (Your Backup Game)" value={formData.game2} onChange={handleChange} required />
      
      <p>I agree to the Official Gauntlet Rules: No Cheats, Game Provision, 1v1 Format.</p>
      <button type="submit">Accept the Gauntlet Challenge!</button>
      <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{message}</p>
    </form>
  );
}

export default SignUpForm;