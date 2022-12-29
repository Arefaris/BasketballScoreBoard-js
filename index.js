let homeScore = document.getElementById("homeNumber")
let guestScore = document.getElementById("guestNumber")



function addoneHome() {
    
    result = Number(homeScore.textContent) + 1
    homeScore.textContent = result
   
}

function addtwoHome() {
    
    result = Number(homeScore.textContent) + 2
    homeScore.textContent = result
   
}

function addtreeHome() {
    
    result = Number(homeScore.textContent) + 3
    homeScore.textContent = result
   
}

function addoneGuest() {
    
    result = Number(guestNumber.textContent) + 1
    guestNumber.textContent = result
   
}

function addtwoGuest() {
    
    result = Number(guestNumber.textContent) + 2
    guestNumber.textContent = result
   
}

function addtreeGuest() {
    
    result = Number(guestNumber.textContent) + 3
    guestNumber.textContent = result
   
}

function resetScore() {
    result = 0
    guestNumber.textContent = result
    homeScore.textContent = result
}