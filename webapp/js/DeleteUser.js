function deleteOwner() {
    const userIdToDelete = document.getElementById('input_userid').value;

    fetch(`http://localhost:8080/api/user/delete-owner/${userIdToDelete}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "delete",
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar dueño');
            }
            alert('Dueño eliminado correctamente');
        })
        .catch(error => {
            alert(error.message);
        });
} 

function deleteEmployee() {
    const userIdToDelete = document.getElementById('input_userid').value;

    fetch(`http://localhost:8080/api/user/delete-owner/${userIdToDelete}`, {
        headers: {
            "Content-Type": "application/json"
        },
        method: "delete",
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al eliminar dueño');
            }
            alert('Dueño eliminado correctamente');
        })
        .catch(error => {
            alert(error.message);
        });
} 