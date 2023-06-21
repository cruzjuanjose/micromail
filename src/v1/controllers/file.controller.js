const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

exports.uploadFile = upload.single('file');

exports.getFile = (req, res) => {
    if (!req.file) {
        res.status(400).json({ message: 'No file uploaded' });
        return;
    }
    res.set('Content-Type', req.file.mimetype);
    res.send(req.file.buffer);
};

exports.deleteFile = (req, res) => {
    // Como estamos utilizando multer.memoryStorage, los archivos se almacenan en la memoria como Buffer,
    // y se eliminan automáticamente una vez que la respuesta se ha devuelto al cliente.
    // Por lo tanto, no es necesario implementar ninguna lógica adicional para eliminar los archivos.
    res.status(200).json({ message: 'File deleted successfully' });
};
