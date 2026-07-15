const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Chào mừng đến với Blog cá nhân của tôi!');
});

app.get('/gioi-thieu', (req, res) => {
    res.send(`
        <h1>Thông tin cá nhân</h1>
        <p>Họ tên: Nguyễn Nhật</p>
        <p>Mã sinh viên: 123456</p>
        <p>Lớp: CNTT...</p>
    `);
});

app.listen(port, () => {
    console.log(`Server đang chạy tại http://localhost:${port}`);
});