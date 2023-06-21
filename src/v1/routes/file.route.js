const express = require('express');
const router = express.Router();
const fileController = require('../controllers/file.controller');

router.use((req, res, next) => {
    const version = req.headers['accept-version'];
    if (version && version === '1.0.0') {
        next();
    } else {
        res.status(400).json({ message: 'Invalid API version' });
    }
});

router.post('/upload', fileController.uploadFile);
router.get('/file', fileController.getFile);
router.delete('/file', fileController.deleteFile);

module.exports = router;
