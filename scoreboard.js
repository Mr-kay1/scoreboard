let count = 0
let second_count = 0
let start_over = document.getElementById("new_count")
let hometeam = document.getElementById("home-el")
let guest_team = document.getElementById("guest-el")
function home_one(){
    count += 1
    hometeam.textContent = count
}
function home_two(){
    count += 2
    hometeam.textContent = count
}
function home_three(){
    count += 3
    hometeam.textContent = count
}

//the guest team

function guest_one(){
    second_count += 1
    guest_team.textContent = second_count
}
function guest_two(){
    second_count += 2
    guest_team.textContent = second_count
}
function guest_three(){
    second_count += 3
    guest_team.textContent = second_count
}

function new_game(){
    console.log(count)
}