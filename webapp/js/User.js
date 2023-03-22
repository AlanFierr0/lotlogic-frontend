function register(){
    const nombreApellido = document.getElementById('nombre').value;
    const dni = document.getElementById("DNI").value;
    const password = document.getElementById("contraseña").value;
    const confirmacionPassword = document.getElementById("confirmacion").value;

    if (password !== confirmacionPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }
}