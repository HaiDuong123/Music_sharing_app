const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

// 1. CẤU HÌNH CLOUDINARY
cloudinary.config({
  cloud_name: 'dettxotbf',
  api_key: '181389314126533',
  api_secret: '6Z2iu1-YvKy48Dco7gJSBVcOZEU'
});

// 2. CẤU HÌNH MULTER (Sửa lại params để hỗ trợ Audio tốt hơn)
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'music-sharing-app',
    resource_type: 'auto', // Quan trọng: Để tự nhận diện là file nhạc (video/audio)
    // format: async (req, file) => 'mp3', // Nếu cần ép đuôi file
  },
});

const upload = multer({ storage: storage });

// 3. KẾT NỐI MONGODB 
// Lưu ý: Mình đã thêm tên DB "/musicDB" vào link để dữ liệu không bị lưu vào folder "test"
mongoose.connect('mongodb+srv://nq2020ngohoanghaiduong200104_db_user:duong123@cluster0.kaakqxl.mongodb.net/musicDB?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('MongoDB Connected ✅'))
  .catch(err => console.log('MongoDB Error:', err));

// Schema
const FileSchema = new mongoose.Schema({
  filename: String,
  path: String,
  size: Number,
  createdAt: { type: Date, default: Date.now }
});
const FileModel = mongoose.model('File', FileSchema);

// 4. API ROUTES

// Route Upload (Đã thêm bắt lỗi Multer)
app.post('/api/upload', (req, res) => {
  // Gọi hàm upload bên trong để bắt lỗi
  upload.single('file')(req, res, async (err) => {
    // 1. Nếu lỗi từ Cloudinary/Multer
    if (err) {
      console.error("Lỗi Upload Cloudinary:", err); // In lỗi ra Terminal để xem
      return res.status(500).json({ error: "Lỗi khi tải lên Cloudinary: " + err.message });
    }

    // 2. Nếu không chọn file
    if (!req.file) {
      return res.status(400).json({ error: "Chưa chọn file nào!" });
    }

    // 3. Lưu vào MongoDB
    try {
      const newFile = new FileModel({
        filename: req.file.originalname,
        path: req.file.path,
        size: req.file.size
      });
      await newFile.save();
res.json({ 
      message: 'Upload thành công!', 
      fileId: newFile._id,
      fileUrl: newFile.path,    // <--- Thêm dòng này (Link Cloudinary)
      filename: newFile.filename // <--- Thêm dòng này (Tên file)
    });    } catch (dbError) {
      console.error("Lỗi MongoDB:", dbError);
      res.status(500).json({ error: dbError.message });
    }
  });
});

app.get('/api/file/:id', async (req, res) => {
  try {
    const file = await FileModel.findById(req.params.id);
    if (!file) return res.status(404).json({ message: "File không tồn tại" });
    res.json(file);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.get('/api/download/:id', async (req, res) => {
    try {
        const file = await FileModel.findById(req.params.id);
        if (!file) return res.status(404).json({ message: "File không tồn tại" });
        res.redirect(file.path); 
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));