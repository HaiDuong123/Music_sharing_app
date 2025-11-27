import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { FaDownload, FaMusic } from 'react-icons/fa';
import { API_URL } from '../apiConfig';

function DownloadPage() {
  const { id } = useParams();
  const [fileInfo, setFileInfo] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/api/file/${id}`)
      .then(res => setFileInfo(res.data))
      .catch(err => console.log(err));
  }, [id]);

  const handleDownload = () => {
    // Gọi API download để trình duyệt tự tải về
    window.open(`${API_URL}/api/download/${id}`, '_blank');
  };

  return (
    <div className="card download-card">
      {fileInfo ? (
        <>
            <div className="icon-wrapper"><FaMusic size={40} /></div>
            <h3>{fileInfo.filename}</h3>
            <p className="file-size">{(fileInfo.size / 1024 / 1024).toFixed(2)} MB</p>
            
            <button onClick={handleDownload} className="btn-download">
                <FaDownload /> Tải xuống ngay
            </button>
        </>
      ) : (
        <p>Đang tìm file...</p>
      )}
    </div>
  );
}

export default DownloadPage;