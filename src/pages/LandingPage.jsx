import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/landingPageStyles.css";
import FileUploader from "../components/FileUploader";
import BottomLayout from "../components/BottomLayout";

function LandingPage() {
  const [selectedOption, setSelectedOption] = useState("Option 1");
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
      <Navbar />
      <div>
        <div className="topPart">
          <h1>
            Generate Personalized Outreach <span>At Scale</span>
          </h1>
          <p>
            Simply upload a .CVS containing either your target linkedin or
            website address. The AI will create collumn with personalized one
            liner and email content.
          </p>
        </div>
        <div className="bottomPart">
          <div className="bottomPartLeft">
            <FileUploader />
          </div>
          <div className="bottomPartRight">
            <div className="leftOne">
              <div class="mb-3" data-bs-theme="dark">
                <label for="exampleFormControlInput1" class="form-label">
                  Website link or resume
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="website url"
                />
              </div>
              <div>
                <div
                  for="exampleFormControlInput1"
                  class="form-label"
                  style={{ color: "white" }}
                >
                  Goal
                </div>
                <div className="custom-dropdown">
                  <div
                    className="custom-selected-option"
                    onClick={toggleOptions}
                  >
                    {selectedOption || "Select an option"}
                    <img src="./Icon.svg" alt="Icon" />
                  </div>
                  {showOptions && (
                    <div className="custom-options">
                      <div
                        className="custom-option"
                        onClick={() => handleOptionClick("Option 1")}
                      >
                        Option 1
                      </div>
                      <div
                        className="custom-option"
                        onClick={() => handleOptionClick("Option 2")}
                      >
                        Option 2
                      </div>
                      <div
                        className="custom-option"
                        onClick={() => handleOptionClick("Option 3")}
                      >
                        Option 3
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div>
                <div class="mb-3" data-bs-theme="dark">
                  <label for="exampleFormControlInput1" class="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </div>
            </div>
            <div className="rightOne">
              <button>
                Generate content <img src="./thunder.svg" alt="img.."></img>{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <BottomLayout />
    </div>
  );
}

export default LandingPage;
