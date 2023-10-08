import React from "react";
import '../styles/loadingStyles.css';

export default function LoadingAnimation() {
  return (
    <div className="progress-bar">
      <div className="progress-fill"></div>
    </div>
  );
}
