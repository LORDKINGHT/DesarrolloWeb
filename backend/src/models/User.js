const { Schema,model} = require ('mongoose');
/**

 * @fileoverview  Backend

 * @version       1.0

 * @author        Andres Garcia <afgarcia2@poligran.edu.co>
 * @author        Julio Parra <juparram@poligran.edu.co>              

 * @copyright     Contenido Libre

 *

 * History

 * v1.0 – Se crea y se definen las variables que la base de datos va a usar.


*/
const userSchema = new Schema({
 email: String,
 password: String

},{
    timestamps:true
});

module.exports = model ('User', userSchema);