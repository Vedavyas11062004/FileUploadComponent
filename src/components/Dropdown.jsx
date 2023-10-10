import React, { useState } from 'react';
import '../styles/dropDownStyles.css'; // Import the CSS file

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Spain 🇪🇸');
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
          <img src='./Icon.svg' alt='img..' className='IconImg'></img>
        </div>
        {showOptions && (
          <div className="options">
            <div className="option" onClick={() => handleOptionClick('Spain 🇪🇸')}>
            Spain <span role="img" aria-label="flag">🇪🇸</span>
            </div>
            <div className="option" onClick={() => handleOptionClick('French 🇫🇷')}>
            French 🇫🇷
            </div>
            <div className="option" onClick={() => handleOptionClick('English 🏴󠁧󠁢󠁥󠁮󠁧󠁿 ')}>
            English 🏴󠁧󠁢󠁥󠁮󠁧󠁿
            </div>
            <div className="option" onClick={() => handleOptionClick('German 🇩🇪')}>
            German 🇩🇪
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Dropdown;
