const express = require('express');
const path = require('path');

const app = express();
//instalar nodemon (npm i nodemon -D), instalar express (npm install express)//
app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => { 
   res.sendFile(path.resolve(__dirname, './src/views/home.html'));
   
});
// './views/home.html' esto cambia dependiendo el proyecto//
app.listen(3000, () => console.log('Servidor corriendo en el puerto 3000'));
 //copia todo esto para prox proyectos//