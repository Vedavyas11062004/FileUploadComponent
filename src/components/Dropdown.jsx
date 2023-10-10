import React, { useState } from 'react';
import '../styles/dropDownStyles.css'; // Import the CSS file

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('spain');
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
          <img src='./Icon.svg' className='IconImg'></img>
        </div>
        {showOptions && (
          <div className="options">
            <div className="option" onClick={() => handleOptionClick('spain')}>
            spain
            </div>
            <div className="option" onClick={() => handleOptionClick('French')}>
            French
            </div>
            <div className="option" onClick={() => handleOptionClick('English')}>
            English
            </div>
            <div className="option" onClick={() => handleOptionClick('German')}>
            German
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Dropdown;
