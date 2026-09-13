const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({ origin: '*' }));

app.post('/api/reaction', (req, res) => {
    const { url, emoji } = req.body;
    
    if (!url || !emoji) {
        return res.status(400).json({ status: false, message: 'URL dan Emoji wajib diisi!' });
    }

    console.log(`[Zech Vercel Bridge] Menerima reaksi: ${emoji} untuk ${url}`);
    
    return res.status(200).json({ 
        status: true, 
        message: 'Reaksi berhasil diproses oleh Vercel Bridge!' 
    });
});

// Penanganan agar kompatibel dengan serverless Vercel
module.exports = app;
