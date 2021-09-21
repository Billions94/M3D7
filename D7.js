const fetchUserData = async() => {
    const response = await  fetch(`https://jsonplaceholder.typicode.com/users`)
    const userData = await response.json()
    console.log(userData)
}





window.onload = () => {
    fetchUserData()
}