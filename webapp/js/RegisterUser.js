function registerOwner() {
    const name = document.getElementById('input_name').value;
    const lastName = document.getElementById('input_lastname').value;
    const dni = document.getElementById('input_dni').value;
    const password = document.getElementById('input_password').value;
    const confirmationPassword = document.getElementById('input_confirmationpassword').value;

    if (password !== confirmationPassword) {
        alert('Las contraseñas no coinciden');
        return;
    }

    const nuevoUsuario = {
        dni: dni,
        firstName: name,
        lastName: lastName,
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
                throw new Error('Error al agregar dueño');
            }
            alert('Dueño agregado correctamente');
        })
        .catch(error => {
            alert(error.message);
        });
}

function registerEmployee() {
    const name = document.getElementById('input_name').value;
    const lastName = document.getElementById('input_lastname').value;
    const dni = document.getElementById('input_dni').value;
    const pin = document.getElementById('input_pin').value;
    const confirmationPin = document.getElementById('input_confirmationpin').value;

    if (pin !== confirmationPin) {
        alert('Los pines no coinciden');
        return;
    }

    const nuevoUsuario = {
        dni: dni,
        firstName: name,
        lastName: lastName,
        password: pin
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
