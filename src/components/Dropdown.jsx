import React, { useState } from 'react';
import '../styles/dropDownStyles.css'; // Import the CSS file

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h2>Input Group</h2>
      <div className="input-group">
        <input
          type="text"
          value={selectedOption}
          readOnly
          placeholder="Select an option"
          className="selected-option"
        />
        <div className="options">
          <div
            className={`option ${selectedOption === 'Option 1' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Option 1')}
          >
            Option 1
          </div>
          <div
            className={`option ${selectedOption === 'Option 2' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Option 2')}
          >
            Option 2
          </div>
          <div
            className={`option ${selectedOption === 'Option 3' ? 'selected' : ''}`}
            onClick={() => handleOptionClick('Option 3')}
          >
            Option 3
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
