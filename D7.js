

// let userData = []

// const infomationList = (name) => `
// <li class="list-group-item">${name}</li>`

// const fetchUserData = async() => {
//     const response = await  fetch(`https://jsonplaceholder.typicode.com/users`)
//     const userData = await response.json()
//     console.log(userData)
//  return userData
    
// }

// let name = document.getElementById('name')
// let username = document.getElementById('username')
// let email = document.getElementById('email')
// let userInfo = document.getElementById('newList')

// const showNames = () => {

//     fetchUserData()

//             .then(data => {
//                 console.log(data)
//                 userInfo.innerHTML = ""
                
//                 data.forEach(name => {
//                     console.log(name)
//                     userInfo.innerHTML += infomationList(name.name)
//                     // nameArray.push(name.name)
//                 });

//             })
// }

// const filter = () => {
//     const field = "name" // "email"
//     const query = document.querySelector("#query").value

//     const filteredList = userData.filter( user => user[field].includes(query))

//     console.log(filteredList)
// }



// window.onload = async () => {
//     userData = await fetchUserData()
       
   
// }

const displayData = (data) => {
const container = document.getElementById('main-container');
const table =  `<table class="table table-dark">
    <thead>
    <tr>
        <th scope="col">Name</th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Address</th>
        <th scope="col">Company</th>
        <th scope="col">Phone</th>
        <th scope="col">Website</th>
    </tr>
    </thead>
    <tbody>
    ${data.map(user => ` <tr>
    <th scope="row">${user.name}</th>
    <td>${user.username}</td>
    <td>${user.email}</td>
    <td>${Object.values(user.address).filter(value => typeof value !== 'object').join(', ')}</td>
    <td>${Object.values(user.company).join(', ')}</td>
    <td>${user.phone}</td>
    <td>${user.website}</td>
</tr>`).join('')}

    </tbody>
    </table>`

    container.innerHTML += table;
}


window.onload = async () => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data = await response.json()
        console.log(data)

        displayData(data)
        
        const input = document.querySelector("#query")
        input.addEventListener('input', function(event){
            console.log(event.target.value) 
        })

        
    } catch (err) {
        console.log(err)
    }
}