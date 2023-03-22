function myFunction() {
    const nombreApellido = document.getElementById('nombre').value;
    const dni = document.getElementById('DNI').value;
    const password = document.getElementById('contraseña').value;
    const confirmacionPassword = document.getElementById('confirmacion').value;

    if (password !== confirmacionPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const nuevoUsuario = {
        dni: dni,
        firstName: nombreApellido,
        lastName: nombreApellido,
        password: password
    };

    fetch('http://localhost:8080/api/user/add', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(nuevoUsuario),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar usuario');
            }
            alert('Usuario agregado correctamente');
        })
        .catch(error => {
            alert(error.message);
        });
} 
