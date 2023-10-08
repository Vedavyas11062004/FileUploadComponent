import React, { useState } from "react";
import "../styles/fileUploadStyles.css";
import "react-toastify/dist/ReactToastify.css";
import LoadingAnimation from "./LoadingAnimation";
import FileDownload from "./FileDownload";

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    setSelectedFile(file);
    setPreview(file);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
    setPreview(file);
  };

  const setPreview = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      setPreviewUrl(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setSelectedFile(null);
    setPreviewUrl(null);
  };

  const handlePopUp1 = () => {
    document.getElementById("popup1").click();
    const timer = setTimeout(() => {
      document.getElementById("dismissBtn").click();
      setIsOpen(true);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (selectedFile) {
      console.log("File uploaded:", selectedFile);
    }
    handlePopUp1();
  };

  return (
    <div>
      {!isOpen && (
        <div className="outerContainer">
          <form onSubmit={handleFormSubmit}>
            <input type="file" id="fileInput" onChange={handleFileUpload} />
            <button type="submit" disabled={!selectedFile} className="button">
              Upload your leads
            </button>
          </form>
          <div
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            className="fileUploadDiv"
          >
            {previewUrl ? (
              <div style={{ position: "relative", top: 5, right: 5 }}>
                <button
                  onClick={handleRemove}
                  style={{ position: "absolute", top: 0, right: 0 }}
                  className="crossBtn"
                >
                <img src="./Vector.svg" alt="img2.."></img>
                </button>
                <img
                  src={previewUrl}
                  alt="Preview"
                  style={{ maxWidth: "100%", maxHeight: "200px" }}
                />
              </div>
            ) : (
              <p className="dropBoxText">
                <span onClick={handleButtonClick} className="clickBtn">
                  click
                </span>
                {" "} to browse or
                Drag and drop your files
              </p>
            )}
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <h3 className="modal-title fs-5" id="exampleModalLabel">
                    Generating Content
                  </h3>
                  <p>COLD OUTREACH SENTENCES...</p>
                </div>
                <div className="modal-body">
                  <LoadingAnimation />
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    id="dismissBtn"
                  >
                    cancel
                    <img src="./Vector.svg" alt="" />
                  </button>
                </div>
                <div className="modal-footer">
                  <img src="./Tick.svg" alt="img4.." /> 23%-2039/29220
                </div>
              </div>
            </div>
          </div>
          <div className="popupBtns">
            <button
              type="button"
              className="btn btn-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              id="popup1"
              style={{ display: "none" }}
            >
              Launch static backdrop modal
            </button>
          </div>
        </div>
      )}
      {isOpen && <FileDownload />}
    </div>
  );
};

export default FileUploader;
