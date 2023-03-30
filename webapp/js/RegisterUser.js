function registerOwner() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('DNI').value;
    const password = document.getElementById('contraseña').value;
    const confirmacionPassword = document.getElementById('confirmacion').value;

    if (password !== confirmacionPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const nuevoUsuario = {
        dni: dni,
        firstName: nombre,
        lastName: apellido,
        password: password
    };

    fetch('http://localhost:8080/api/user/add-owner', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(nuevoUsuario),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar dueno');
            }
            alert('Dueno agregado correctamente');
        })
        .catch(error => {
            alert(error.message);
        });
} 

function registerEmployee() {
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const dni = document.getElementById('DNI').value;
    const password = document.getElementById('contraseña').value;
    const confirmacionPassword = document.getElementById('confirmacion').value;

    if (password !== confirmacionPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const nuevoUsuario = {
        dni: dni,
        firstName: nombre,
        lastName: apellido,
        password: password
    };

    fetch('http://localhost:8080/api/user/add-employee', {
        headers: {
            "Content-Type": "application/json"
        },
        method: "post",
        body: JSON.stringify(nuevoUsuario),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al agregar empleado');
            }
            alert('Empleado agregado correctamente');
        })
        .catch(error => {
            alert(error.message);
        });
} 