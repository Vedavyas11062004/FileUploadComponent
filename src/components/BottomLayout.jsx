import React from "react";
import '../styles/layoutStyles.css';

function BottomLayout() {
  return (
    <div className="bottomLayoutContainer">
      <div>
        <img src="./Auto Layout Horizontal.svg" alt="img1" />
        <h4>Multi Languages Supported</h4>
        <p>Our AI supports multiple languages for personalized outreach.</p>
      </div>
      <div>
        <img src="./Auto Layout Horizontal-1.svg" alt="img2" />
        <h4>Personalize thousands of leads in seconds</h4>
        <p>
          Instantly personalize thousands of leads with Weasly's lightning-fast
          AI.
        </p>
      </div>
      <div>
        <img src="./Auto Layout Horizontal-2.svg" alt="img2" />
        <h4>Edit your leads directtly on your .CSV</h4>
        <p>
          Edit leads directly within your .CSV file using Weasly's user-friendly
          interface
        </p>
      </div>
      <div>
        <img src="./Auto Layout Horizontal-3.svg" alt="img2" />
        <h4>Increase your response rate by x%</h4>
        <p>Experience a substantial boost in your response rate.</p>
      </div>
    </div>
  );
}

export default BottomLayout;
