let process = require("process");
const moduloUser = require("./usuarios");
let modulos = require("./usuarios");

let comando = process.argv[2];

switch (comando) {
    case "registro":
        let nombre0 = process.argv[3]
        let mail0 = process.argv[4]
        let password0 = process.argv[5]
        

        if (nombre0 == undefined || mail0 == undefined || password0 == undefined) {
            console.log("Por favor, ingrese los datos requeridos.");
        } else if (mail0.includes("@") == false) {
            console.log("Por favor, ingrese un mail correcto.");
        } else {
            modulos.registro(nombre0, mail0, password0);
            
        }
        break;
    case "eliminar":
        let mail1 = process.argv[3];
        let password1 = process.argv[4];
        moduloUser.eliminar(mail1,password1)
        break;
    case "login":
        let mail2 = process.argv[3];
        let password2 = process.argv[4];
        modulos.existe(mail2,password2)
        

break;

    default:
console.log("Ingrese un comando para comenzar.")
break;
}



