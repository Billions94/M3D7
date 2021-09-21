let nameArray = [];
let userNameArray = [];
let userEmailArray = [];

const infoList = (info) => `
<li class="list-group-item">${info}</li>`

const fetchUserData = async() => {
    const response = await  fetch(`https://jsonplaceholder.typicode.com/users`)
    const userData = await response.json()
    console.log(userData)

    return userData
}

let name = document.getElementById('name')
let username = document.getElementById('username')
let email = document.getElementById('email')
let userInfo = document.getElementById('userInfo')

const showNames = () => {

    fetchUserData()
    .then(data => {
        console.log(data)
        userData.innerHTML = ""
        
        data.forEach(name => {
            console.log(name)
            userData.innerHTML += infoList(name.name)
            nameArray.push(name.name)
        });

    })
}


const showUserName = () => {
    fetchUserData()
    .then(data => {
        console.log(data)
        userData.innerHTML = ""

        data.forEach(username => {
            console.log(username)
            userData.innerHTML += infoList(username.username)
            userNameArray.push(username.username)
        });

    })
}

const showEmail = () => {
    fetchUserData()
    .then(data => {
        console.log(data)
        userData.innerHTML = ""

        data.forEach(email => {
            console.log(email)
            userData.innerHTML += infoList(email.email)
            userEmailArray.push(email.email)
        });

    })
}
const searchUsers = () => {
    const searchUser = document.querySelector("input[type=search]").value
    console.log(searchUser)

    
}








window.onload = () => {
    fetchUserData()
    // showNames()
}