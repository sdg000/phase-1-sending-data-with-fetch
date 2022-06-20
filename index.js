
function submitData(name, email){

    //defining body object
    const folks = {
        name,
        email
    }

    //defining configuration object
    const confObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(folks)
    }
    
    //GOAL of fetch() posting a name and user to http://localhost:3000/users

    // posting data with fetch (url , configurationObject)
    return fetch('http://localhost:3000/users', confObject)


    //transforming fetch response json to object
    .then(function(response){
        return response.json()
    })

    //writing returned object to the document body
    .then(function(object){
        document.body.innerHTML = object["id"]
    })

    //Error handling, write error message to the body
    .catch(function(error){
        const errorMsg = document.querySelector('body')
        errorMsg.innerHTML = error.message
    })
}