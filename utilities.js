export function getAudi(){
    fetch("http://localhost:3000/Audi",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json)
}

export function getNisaan(){
    fetch("http://localhost:3000/Nissan",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json)
}

export function getToyota(){
    fetch("http://localhost:3000/Toyota",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json)
}

export function getMercedes(){
    fetch("http://localhost:3000/Mercedes",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json)
}

export function getBMW(){
    fetch("http://localhost:3000/BMW",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json)
}

export function getCustomers(){
    fetch("http://localhost:3000/Customers",{
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response  => response.json)
}

export function postCustomers(customer){
    fetch("http://localhost:3000/Customers",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(customer)
    })
    .then(response  => response.json)
}