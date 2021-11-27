/**

 * @fileoverview  Conexion Base de Datos

 * @version       1.0

 * @author        Andres Garcia <afgarcia2@poligran.edu.co>
 * @author        Julio Parra <juparram@poligran.edu.co>              

 * @copyright     Contenido Libre

 *

 * History

 * v1.0 – Se conecta la base de datos al LocalHost.


*/
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/angular-auth',{
  useNewUrlParser:true,
  useUnifiedTopology: true
})
.then(db=> console.log('Database is connected'))
.catch(err => console.log(err));
