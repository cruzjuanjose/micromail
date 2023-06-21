const request = require('supertest');
const app = require('../app');
const nodemailer = require('nodemailer');

jest.mock('nodemailer');

const mockTransporter = {
  sendMail: jest.fn().mockResolvedValue({ messageId: '12345' }),
};

describe('Email Controller', () => {
  beforeAll(() => {
    app.set('transporter', mockTransporter);
  });

  it('should send text email successfully', async () => {
    const response = await request(app)
      .post('/api/v1/email/sendTextEmail')
      .send({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'This is a test email',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Email sent successfully');
    expect(mockTransporter.sendMail).toHaveBeenCalled();
  });

  it('should send HTML email successfully', async () => {
    const response = await request(app)
      .post('/api/v1/email/sendHtmlEmail')
      .send({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Test Email',
        html: '<h1>This is a test email</h1>',
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Email sent successfully');
    expect(mockTransporter.sendMail).toHaveBeenCalled();
  });

  it('should send email with attachment successfully', async () => {
    const response = await request(app)
      .post('/api/v1/email/sendAttachmentEmail')
      .send({
        from: 'sender@example.com',
        to: 'recipient@example.com',
        subject: 'Test Email',
        text: 'This is a test email with attachment',
        attachments: [
          { filename: 'file1.txt', content: 'Attachment content' },
        ],
      });

    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Email sent successfully');
    expect(mockTransporter.sendMail).toHaveBeenCalled();
  });
});
