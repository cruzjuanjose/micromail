const nodemailer = require('nodemailer');

exports.sendTextEmail = async (req, res) => {
    const transporter = req.app.get('transporter');

    const { from, to, subject, text } = req.body;

    const mailOptions = {
        from,
        to,
        subject,
        text
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
}

exports.sendHtmlEmail = async (req, res) => {
    const transporter = req.app.get('transporter');

    const { from, to, subject, html } = req.body;

    const mailOptions = {
        from,
        to,
        subject,
        html
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
}

exports.sendAttachmentEmail = async (req, res) => {
    const transporter = req.app.get('transporter');

    const { from, to, subject, text, attachments } = req.body;

    const mailOptions = {
        from,
        to,
        subject,
        text,
        attachments
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Email sent successfully', info });
    } catch (error) {
        res.status(500).json({ message: 'Error sending email', error });
    }
}
