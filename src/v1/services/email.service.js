class EmailService {
    constructor(transporter) {
      this.transporter = transporter;
    }
  
    async sendEmail(options) {
      try {
        const info = await this.transporter.sendMail(options);
        return info;
      } catch (error) {
        throw new Error('Error sending email');
      }
    }
  }
  
  module.exports = EmailService;
  