import React from "react";
import "../styles/fileDownloadStyles.css";

export default function FileDownload() {
  return (
    <div className="downLoadDiv">
      <h2>Your outreach sheet is Ready</h2>
      <img src="./csv 1.svg" alt="img.." />
      <span>testsheet.csv - 12mo</span>
      <button>
        Download <img src="./download.svg" alt="downloadimg..." />{" "}
      </button>
      <div className="buttomIcon">
        <img src="./Tick.svg" alt="img4.." /> 100%-29220/29220
      </div>
    </div>
  );
}
