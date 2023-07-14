import React from 'react';

const PasswordStrengthIndicator = ({ strength }) => {
  const indicators = ['Weak', 'Fair', 'Good', 'Strong', 'Excellent'];

  return (
    <div>
      <label>Password Strength:</label>
      <span>{indicators[strength]}</span>
    </div>
  );
};

export default PasswordStrengthIndicator;
