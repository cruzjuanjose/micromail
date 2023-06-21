const express = require('express');
const config = require('config');
const nodemailer = require('nodemailer');
const emailRouter = require('./src/v1/routes/email.route');
const fileRouter = require('./src/v1/routes/file.route');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

const app = express();
app.use(express.json());

// Configura nodemailer
const smtpConfig = config.get('smtp');
const transporter = nodemailer.createTransport({
    host: smtpConfig.host,
    port: smtpConfig.port,
});

app.set('transporter', transporter);

// Middleware to set version based on "Accept" header
app.use((req, res, next) => {
  if (req.is('application/vnd.myapp.v1+json')) {
    req.apiVersion = 'v1';
  } else {
    req.apiVersion = 'v1'; // Default version
  }
  next();
});

// Permite que el servidor Express procese datos JSON
app.use(express.json());


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API de Envío de Correo y Gestión de Archivos',
      version: '1.0.0',
    },
    servers: [
      {
        url: `http://${config.hostname}:${config.port}`,
      },
    ],
  },
  apis: [path.join(__dirname, 'routes/*.js')],
};

const specs = swaggerJsdoc(options);




// Configura las rutas basadas en la versión

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.use((req, res, next) => {
  if (req.apiVersion === 'v1') {
    app.use('/api/email', emailRouter);
    app.use('/api/file', fileRouter);
  }
  next();
});

const port = config.get('app.port');
const hostname = config.get('app.hostname');

app.listen(port, () => {
  console.log(`Server is running at http://${hostname}:${port}`);
});

module.exports = app;
