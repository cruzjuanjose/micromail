/**
 * @swagger
 * components:
 *   schemas:
 *     Email:
 *       type: object
 *       properties:
 *         from:
 *           type: string
 *           description: El remitente del correo electrónico
 *           example: sender@example.com
 *         to:
 *           type: string
 *           description: El destinatario del correo electrónico
 *           example: recipient@example.com
 *         subject:
 *           type: string
 *           description: El asunto del correo electrónico
 *           example: Prueba de correo electrónico
 *         text:
 *           type: string
 *           description: El contenido de texto del correo electrónico
 *           example: Este es un correo de prueba en formato de texto.
 *         html:
 *           type: string
 *           description: El contenido HTML del correo electrónico
 *           example: <h1>Esto es un correo de prueba en formato HTML</h1>
 *         attachments:
 *           type: array
 *           description: Los archivos adjuntos del correo electrónico
 *           items:
 *             type: object
 *             properties:
 *               filename:
 *                 type: string
 *                 description: El nombre del archivo adjunto
 *                 example: file1.txt
 *               content:
 *                 type: string
 *                 description: El contenido del archivo adjunto
 *                 example: SGVsbG8gd29ybGQh
 */

/**
 * @swagger
 * tags:
 *   name: Email
 *   description: Endpoints para el envío de correos electrónicos
 */

/**
 * @swagger
 * tags:
 *   name: File
 *   description: Endpoints para la gestión de archivos
 */

/**
 * @swagger
 * /api/v1/email/sendTextEmail:
 *   post:
 *     summary: Envía un correo electrónico en formato de texto
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Correo electrónico enviado exitosamente
 *       500:
 *         description: Error al enviar el correo electrónico
 *
 * /api/v1/email/sendHtmlEmail:
 *   post:
 *     summary: Envía un correo electrónico en formato HTML
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Correo electrónico enviado exitosamente
 *       500:
 *         description: Error al enviar el correo electrónico
 *
 * /api/v1/email/sendAttachmentEmail:
 *   post:
 *     summary: Envía un correo electrónico con archivo adjunto
 *     tags: [Email]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Email'
 *     responses:
 *       200:
 *         description: Correo electrónico enviado exitosamente
 *       500:
 *         description: Error al enviar el correo electrónico
 *
 * /api/v1/file/upload:
 *   post:
 *     summary: Sube un archivo
 *     tags: [File]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               file:
 *                 type: string
 *                 format: binary
 *     responses:
 *       200:
 *         description: Archivo subido exitosamente
 *       500:
 *         description: Error al subir el archivo
 *
 * /api/v1/file/file:
 *   get:
 *     summary: Obtiene el archivo
 *     tags: [File]
 *     responses:
 *       200:
 *         description: Archivo obtenido exitosamente
 *       500:
 *         description: Error al obtener el archivo
 *
 * /api/v1/file/file:
 *   delete:
 *     summary: Elimina el archivo
 *     tags: [File]
 *     responses:
 *       200:
 *         description: Archivo eliminado exitosamente
 *       500:
 *         description: Error al eliminar el archivo
 */
