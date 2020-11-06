const fs = require("fs");



let moduloUser = {
    archivo: ("./usuarios.json"),
    leerJSON: function () {
        let usuariosJSON = fs.readFileSync(this.archivo, "utf-8");
        return JSON.parse(usuariosJSON)
    },
    guardarJSON: function (info) {
        let nuevoJSON = JSON.stringify(info)
        fs.writeFileSync(this.archivo, nuevoJSON, 'utf-8')
    },
    registro: function (nombre, mail, password) {
        let usuarios = this.leerJSON();
        let existe = usuarios.filter(function (user) {
            return user.mail == mail 
        })
        if (existe[0] != undefined){
            console.log("El usuario ya se encuentra registrado.");
        }else{
        let letras = ["a","b","c","d","e","f","g","h","i","j","k","l","m","ñ","o","p","q","r","s","t","u","v","w","x","y","z"]
        let numeros = [0,1,2,3,4,5,6,7,8,9]
        let letrasOk = letras.filter(function(n){
            return password.indexOf(n) != -1
        })
        let numerosOk = numeros.filter(function(n){
            return password.indexOf(n) != -1
        })

        if (letrasOk[0] == undefined || numerosOk[0] == undefined){
            console.log("Por favor, ingrese una contraseña correcta combinando letras y números.")
        }else{
        let usuario = {
            nombre: nombre,
            mail: mail,
            password: password
        }
   
        usuarios.push(usuario);
        this.guardarJSON(usuarios);
        console.log("Ususario generado correctamente.")
    }
    }
},
    eliminar: function (mail,password) {
        let usuarios = this.leerJSON();
        let eliminadoM = usuarios.filter(function (user) {
            return user.mail != mail 
        })
        let eliminadoP = usuarios.filter(function(user){
            return user.password != password
        })
        if (eliminadoM.length === eliminadoP.length){
            this.guardarJSON(eliminadoM);
            console.log("El usuario ha sido eliminado")
        }else{
            console.log("Ingrese un usuario y contraseña correctos.")
        }
    },
    existe : function(mail2,password2){
        let usuarios2 = this.leerJSON();
        let existe = usuarios2.filter(function (user) {
            return user.mail == mail2 
        })
        if (existe[0] == undefined){
            console.log("El usuario no se encuentra registrado.");
        }
        usuarios2.forEach(element => {
            if (element.password === password2 && element.mail === mail2) {
                console.log("Bienvenido " + element.nombre)
            } else if (element.password != password2 && element.mail === mail2) {
                console.log("Contraseña incorrecta")
            }
        })
      
        
}
}



module.exports = moduloUser