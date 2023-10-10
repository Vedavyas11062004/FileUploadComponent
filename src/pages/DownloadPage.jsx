import React, { useEffect, useState } from 'react'
import FileDownload from '../components/FileDownload'
import '../styles/fileDownloadStyles.css'
import Navbar from '../components/Navbar';

function DownloadPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <div className='downLoadContainer'>
      <Navbar/>
      {isVisible && <FileDownload />}
    </div>
  )
}

export default DownloadPage
