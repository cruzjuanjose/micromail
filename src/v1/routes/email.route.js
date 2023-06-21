const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email.controller');

// middleware for API versioning
router.use((req, res, next) => {
    const version = req.headers['accept-version'];
    if (version && version === '1.0.0') {
        next();
    } else {
        res.status(400).json({ message: 'Invalid API version' });
    }
});

router.post('/sendTextEmail', emailController.sendTextEmail);
router.post('/sendHtmlEmail', emailController.sendHtmlEmail);
router.post('/sendAttachmentEmail', emailController.sendAttachmentEmail);

module.exports = router;
