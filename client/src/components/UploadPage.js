import React, { useState } from 'react';
import axios from 'axios';
import { FaCloudUploadAlt, FaMusic, FaCheckCircle } from 'react-icons/fa';

function UploadPage() {
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [downloadLink, setDownloadLink] = useState('');
  
  // State mới để lưu thông tin bài hát vừa upload
  const [uploadedSong, setUploadedSong] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return alert("Vui lòng chọn file nhạc!");
    
    const formData = new FormData();
    formData.append('file', file);

    setUploading(true);
    try {
      // Thay localhost:5000 bằng link Render nếu đã deploy
      const res = await axios.post('http://localhost:5000/api/upload', formData);
      
      setDownloadLink(`${window.location.origin}/download/${res.data.fileId}`);
      
      // Lưu thông tin bài hát để hiển thị
      setUploadedSong({
        name: res.data.filename,
        url: res.data.fileUrl
      });

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
      alert("Lỗi khi upload: " + (error.response?.data?.error || error.message));
    }
  };

  // Hàm Reset để upload bài khác
  const handleReset = () => {
    setFile(null);
    setDownloadLink('');
    setUploadedSong(null);
  };

  return (
    <div className="card">
      <h2><FaMusic /> Chia sẻ nhạc MP3</h2>
      
      {!downloadLink ? (
        /* GIAO DIỆN CHƯA UPLOAD */
        <div className="upload-area">
          <input type="file" accept="audio/*" onChange={handleFileChange} id="fileInput" hidden />
          <label htmlFor="fileInput" className="file-label">
            <FaCloudUploadAlt size={50} />
            <p>{file ? file.name : "Click để chọn file hoặc Kéo thả vào đây"}</p>
          </label>
          
          <button onClick={handleUpload} disabled={uploading} className="btn-primary">
            {uploading ? "Đang tải lên..." : "Upload Ngay"}
          </button>
        </div>
      ) : (
        /* GIAO DIỆN ĐÃ UPLOAD XONG */
        <div className="result-area">
          <div style={{ color: '#2ed573', marginBottom: '15px' }}>
            <FaCheckCircle size={50} />
            <h3>Upload thành công!</h3>
          </div>

          {/* --- PHẦN MỚI: TRÌNH PHÁT NHẠC --- */}
          {uploadedSong && (
            <div style={{ background: '#f1f2f6', padding: '15px', borderRadius: '10px', marginBottom: '20px' }}>
              <p style={{ fontWeight: 'bold', margin: '0 0 10px 0', color: '#333' }}>🎵 {uploadedSong.name}</p>
              {/* Thẻ Audio HTML5: controls để hiện nút Play/Pause */}
              <audio controls src={uploadedSong.url} style={{ width: '100%' }}>
                Trình duyệt của bạn không hỗ trợ phát nhạc.
              </audio>
            </div>
          )}
          {/* ---------------------------------- */}

          <p>Gửi link này cho bạn bè:</p>
          <div className="link-box">
            <input type="text" value={downloadLink} readOnly />
            <button onClick={() => navigator.clipboard.writeText(downloadLink)}>Copy</button>
          </div>
          
          <button onClick={handleReset} className="btn-secondary" style={{ marginTop: '10px', background: '#ccc', border: 'none', padding: '10px 20px', borderRadius: '20px', cursor: 'pointer' }}>
            Upload file khác
          </button>
        </div>
      )}
    </div>
  );
}

export default UploadPage;