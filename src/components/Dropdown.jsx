import React, { useState } from 'react';
import '../styles/dropDownStyles.css'; // Import the CSS file

const Dropdown = () => {
  const [selectedOption, setSelectedOption] = useState('Spain 🇪🇸');
  const [showOptions, setShowOptions] = useState(false);
  const [selectedUrl,setSelectedUrl] = useState('./Label.svg');

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
          {/* {selectedOption || 'Select an option'} */}
          <img src={selectedUrl} alt='img..'></img>
          <img src='./Icon.svg' alt='img..' className='IconImg'></img>
        </div>
        {showOptions && (
          <div className="options">
            <div className="option" onClick={() => setSelectedUrl('./Label.svg')}>
            <img src='./Label.svg' alt='img3'></img>
            </div>
            <div className="option" onClick={() => setSelectedUrl('./Label2.svg')}>
            <img src='./Label2.svg' alt='img3'></img>
            </div>
            <div className="option" onClick={() => setSelectedUrl('./Label3.svg')}>
            <img src='./Label3.svg' alt='img3'></img>
            </div>
            <div className="option" onClick={() => setSelectedUrl('./Label4.svg')}>
            <img src='./Label4.svg' alt='img3'></img>
            </div>
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Dropdown;
