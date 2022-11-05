// Add your code here
const submitData = (name, email) => {
    let formData = {
        name: name,
        email: email
    };
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body:JSON.stringify(formData)
    };
    return fetch("http://localhost:3000/users", configObj)
    .then(function(response) {
        return response.json();
    })
    .then(function(object) {
        let h2 = document.createElement("h2")
        h2.innerText = object.id;
        document.body.appendChild(h2);
        console.log(object);
    })
    .catch(function(error) {
        let h3 = document.createElement("h3")
        h3.innerText = error;
        document.body.appendChild(h3);
        console.log(error);
    })
}
