const selectInput = document.querySelector(".form-select")
const searchInput = document.getElementById("search-input")
const searchBtn = document.getElementById("search-btn")

window.onload = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users")
      const data = await response.json()
      
      showUsers(data)

      searchBtn.addEventListener("click", () => {
        const property = selectInput.value
        const searchQuery = searchInput.value.toLowerCase()
  
        const filteredData = data.filter(user => user[property].toLowerCase().includes(searchQuery))
        showResults(filteredData)
      })
       
    } catch (error) {
      console.log(err)
    }
   
  }
  





const showUsers = usersArray => {
    const displayUsers = document.getElementById("users")
    displayUsers.innerHTML = userCode(usersArray)
  }

  const showResults = usersArray => {
    const searchResultSection = document.getElementById("search-results")
    searchResultSection.innerHTML = `<h4> Search Results</h4>`
    searchResultSection.innerHTML += userCode(usersArray)
  }
  

  const userCode = usersArray =>
  usersArray
    .map(
      user => `
    <div class="row ">
    <div class="col-4"><p href="./detail.html?userId=${user.id}" target="_blank">${user.name}</p>
    
    </div>
        <div class="col-4">${user.username}</div>
        <div class="col-4">${user.email}</div>
      </div>
    `
    )
    .join("")
