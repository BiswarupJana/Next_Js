// server.js

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 5000;

app.use(cors()); // Enable CORS

// Serve static files from the 'assets' folder
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Route to serve the PDF file
app.get('/api/pdf', (req, res) => {
    const pdfPath = path.join(__dirname, 'assets', 'dummy.pdf');
    const stat = fs.statSync(pdfPath);

    res.setHeader('Content-Length', stat.size);
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=dummy.pdf');

    const readStream = fs.createReadStream(pdfPath);
    readStream.pipe(res);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
