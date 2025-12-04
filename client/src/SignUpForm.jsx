import { useState } from 'react';
import { API_BASE_URL } from './config';
import Rules from './Rules'; // Import Rules to show in the modal

function SignUpForm() {
  // Form Data State
  const [formData, setFormData] = useState({ name: '', email: '', game1: '', game2: '' });
  const [message, setMessage] = useState('');
  
  // Logic State for Rules Validation
  const [showRulesModal, setShowRulesModal] = useState(false); // Controls the pop-up
  const [hasOpenedRules, setHasOpenedRules] = useState(false); // Tracks if link was clicked
  const [hasAgreed, setHasAgreed] = useState(false); // Tracks the checkbox

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle clicking the "Official Rules" link
  const handleRulesClick = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    setShowRulesModal(true); // Open the modal
    setHasOpenedRules(true); // Unlock the checkbox
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!hasAgreed) return; // Double check protection

    setMessage('Submitting...');
    try {
      const response = await fetch(`${API_BASE_URL}/signup`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          gamesPicked: [formData.game1, formData.game2]
        }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage('SUCCESS! You have signed up. Check your email for your match time.');
        setFormData({ name: '', email: '', game1: '', game2: '' }); // Clear form
        setHasAgreed(false); // Reset agreement
        setHasOpenedRules(false);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error) {
      setMessage('Network error. Is the server running?');
      console.error('Fetch error:', error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>The Gauntlet Challenge Sign-Up</h2>
        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
        
        <h3>Your Two Challenger Picks:</h3>
        <input type="text" name="game1" placeholder="Game 1 (Your Best Game)" value={formData.game1} onChange={handleChange} required />
        <input type="text" name="game2" placeholder="Game 2 (Your Backup Game)" value={formData.game2} onChange={handleChange} required />
        
        {/* --- RULES VALIDATION SECTION --- */}
        <div className="rules-validation">
          <p>
            Please read the{' '}
            <a href="#rules" onClick={handleRulesClick} className="rules-link">
              Official Gauntlet Rules
            </a>
            .
          </p>

          <label className={`checkbox-label ${!hasOpenedRules ? 'disabled' : ''}`}>
            <input 
              type="checkbox" 
              disabled={!hasOpenedRules} // Disabled until rules are clicked
              checked={hasAgreed}
              onChange={(e) => setHasAgreed(e.target.checked)}
            />
            <span>I verify that I have read the rules.</span>
          </label>
        </div>

        {/* Submit Button Disabled until Agreed */}
        <button 
          type="submit" 
          disabled={!hasAgreed} 
          className={!hasAgreed ? 'btn-disabled' : ''}
        >
          Accept the Gauntlet Challenge!
        </button>
        
        <p style={{ marginTop: '10px', fontWeight: 'bold' }}>{message}</p>
      </form>

      {/* --- RULES MODAL OVERLAY --- */}
      {showRulesModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="close-modal" onClick={() => setShowRulesModal(false)}>❌ Close Rules</button>
            <div className="modal-scroll-area">
              <Rules />
            </div>
            <button className="close-modal-bottom" onClick={() => setShowRulesModal(false)}>I Have Read The Rules</button>
          </div>
        </div>
      )}
    </>
  );
}

export default SignUpForm;