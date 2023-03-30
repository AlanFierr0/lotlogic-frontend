function modifyOwner() {
    const name = document.getElementById('input_name').value;
    const lastName = document.getElementById('input_lastname').value;
    const dni = document.getElementById('input_dni').value;
    const password = document.getElementById('input_password').value;
    const userId = document.getElementById('input_userid').value;

    const userEditForm = {
        dni: dni,
        firstName: name,
        lastName: lastName,
        password: password
    };

    fetch((`http://localhost:8080/api/user/update-owner/${userId}`), {
        headers: {
            "Content-Type": "application/json"
        },
        method: "put",
        body: JSON.stringify(userEditForm),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al modificar dueño');
            }
            alert('Dueño modificado correctamente');
        })
        .catch(error => {
            alert(error.message);
        });
}

function modifyEmployee() {
    const name = document.getElementById('input_name').value;
    const lastName = document.getElementById('input_lastname').value;
    const dni = document.getElementById('input_dni').value;
    const pin = document.getElementById('input_pin').value;
    const userId = document.getElementById('input_userid').value;

    const userEditForm = {
        dni: dni,
        firstName: name,
        lastName: lastName,
        password: pin
    };

    fetch((`http://localhost:8080/api/user/update-employee/${userId}`), {
        headers: {
            "Content-Type": "application/json"
        },
        method: "put",
        body: JSON.stringify(userEditForm),
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al modificar empleado');
            }
            alert('Empleado modificado correctamente');
        })
        .catch(error => {
            alert(error.message);
        });


        
}
