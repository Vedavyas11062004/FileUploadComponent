import React, { useState } from 'react';
import '../styles/dropDownStyles.css'; // Import the CSS file

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Option 1');
  const [showOptions, setShowOptions] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setShowOptions(false);
  };

  const toggleOptions = () => {
    console.log(showOptions);
    setShowOptions(!showOptions);
  };

  return (
    <div>
      <div className="dropdown">
        <div
          className="selected-option"
          onClick={toggleOptions}
        >
          {selectedOption || 'Select an option'}
          <img src='./Icon.svg'></img>
        </div>
        {showOptions && (
          <div className="options">
            <div className="option" onClick={() => handleOptionClick('Option 1')}>
              Option 1
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 2')}>
              Option 2
            </div>
            <div className="option" onClick={() => handleOptionClick('Option 3')}>
              Option 3
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Dropdown;
