// server.js
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const sequelize = require('./config/db');



const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para parsear JSON
app.use(express.json());
app.use(morgan('dev'));
// Ruta de ejemplo
app.get('/', (req, res) => {
  res.send('¡Servidor Express funcionando!');
});

// Iniciar el servidor
sequelize.authenticate()
  .then(() => {
    console.log('✅ Conexión a la base de datos exitosa.');
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch(err => {
    console.error('❌ Error al conectar a la base de datos:', err);
  });
