function logIn(event){
    event.preventDefault()
    let dni = document.getElementById('dni').value;
    let password = document.getElementById('password').value;

    const logInForm = {
        dni:dni,
        password:password,

    }
    

    fetch (('http://localhost:8080/api/auth/login'),{
        headers: {
            "Content-Type": "application/json"
        },
        method: "put",
        body: JSON.stringify(logInForm),
    })
    .then(response =>{
        if (!response.ok){
            throw new Error(response.json())
        }
        return response.json()
   })
   .then(data=>console.log(data))
    .catch(error => console.log('a donde quere ir'))


}

