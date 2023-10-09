import React from "react";
import Navbar from "../components/Navbar";
import "../styles/landingPageStyles.css";
import FileUploader from "../components/FileUploader";

function LandingPage() {
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
                <label htmlFor="chooseInput">Goal</label>
                <div class="input-group inputDropDown" data-bs-theme="dark">
                  <select
                    class="form-select"
                    id="inputGroupSelect04"
                    aria-label="Example select with button addon"
                  >
                    <option selected>Cold Outrech</option>
                    <option value="1">Job Request</option>
                  </select>
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
              <button>Generate content</button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
    </div>
  );
}

export default LandingPage;
