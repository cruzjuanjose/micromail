class Email {
    constructor(from, to, subject, text, html, attachments) {
      this.from = from;
      this.to = to;
      this.subject = subject;
      this.text = text;
      this.html = html;
      this.attachments = attachments;
    }
  }
  
  module.exports = Email;
  