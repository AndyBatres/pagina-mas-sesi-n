let users = []
let contr = []
function Registro() {
    let Usuario = document.getElementById("usuario").value;
    let Contraseña = document.getElementById("password").value;
    let conf = true

    while (conf) {
        if (Usuario == "" && Contraseña == "") {
            document.getElementById("mensaje").textContent = "Por favor, complete todos los campos.";
        } else if (Usuario == "" && Contraseña != "") {
            document.getElementById("mensaje").textContent = "Por favor, ingrese su nombre de usuario.";
        } else if (Usuario != "" && Contraseña == "") {
            document.getElementById("mensaje").textContent = "Por favor, ingrese su contraseña.";
        } else if (Usuario != "" && Contraseña != "") {
            users.push(Usuario);
            contr.push(Contraseña);
            alert("Usuario registrado correctamente");
            conf = false;
            window.location.href = "reparacion_y_mantenimiendo.html";
        }
    }
}

function Inicio() {
    let usuarios = ["Admin", "admin", "yo"];
    let contraseñas = ["1234", "4321", "5678"];

    let user = document.getElementById("usuario").value;
    let cont = document.getElementById("password").value;

    if (user === "" && cont === "") {
        document.getElementById("mensaje").textContent = "Por favor, complete todos los campos.";
    } else if (user === "") {
        document.getElementById("mensaje").textContent = "Por favor, ingrese su nombre de usuario.";
    } else if (cont === "") {
        document.getElementById("mensaje").textContent = "Por favor, ingrese su contraseña.";
    } else {
        let mensaje = "Usuario o contraseña incorrecta";

        for (let i = 0; i < 3; i++) {
            if (usuarios[i] === user && contraseñas[i] === cont) {
                mensaje = "Bienvenido " + usuarios[i];
                break;
            }
        }
        for (let i = 0; i < users.length; i++) {
            if (users[i] === user && contr[i] === cont) {
                mensaje = "Bienvenido " + users[i];
                break;
            }
        }
        if (mensaje === "Bienvenido " + user) {
            alert(mensaje);
            window.location.href = "reparacion_y_mantenimiendo.html";
        } else if (mensaje === "Usuario o contraseña incorrecta") {
            document.getElementById("mensaje").textContent = mensaje;
        }
    }
}