
// let a =5
// let b =8
// let count = a+b
// console.log(count)

// let myage=18
// let humandogratio=7
// let myDogAge=myage*humandogratio
// console.log(myDogAge)

// let bonusPoints =50
// console.log(bonusPoints)

// bonusPoints = bonusPoints+50
// console.log(bonusPoints)

// bonusPoints = bonusPoints-75
// console.log(bonusPoints)

// bonusPoints = bonusPoints+45
// console.log(bonusPoints)



// function increment() {
//     console.log("The button was clicked")
// }

// function countdown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// function num() {
//     console.log(42)
// }
// num()

// let lap1=34
// let lap2=31
// let lap3=32

// function lapCount() {
//     console.log(lap1+lap2+lap3)
// }

// lapCount()

// let lapsCompleted =0
// function laps() {
//     lapsCompleted = lapsCompleted+1
// }
// laps()
// laps()
// laps()

// console.log(lapsCompleted)



let counts = 0

function increment() {
    counts += 1
    document.getElementById("countel").innerText = counts
    console.log(counts)
}



function decrement() {
    counts = counts - 1
    document.getElementById("countel").innerText = counts
    console.log(counts)
}

function save() {
    let entries = counts + "-"
    console.log(counts)
    let saveEl = document.getElementById("save-el")
    saveEl.innerText += entries;
    counts=0
    document.getElementById("countel").innerText = counts

}


// let username = "Konal"
// let notification = "you have three new notifications"
// console.log(username + ", " + notification + "!")
// let messagetouser = username + ", " + notification + "!"
// console.log(messagetouser)
// let name = "Konal"
// let greeting = "Hi, my name is "
// let myGreeting = greeting+ name
// console.log(myGreeting)




window.addEventListener('DOMContentLoaded', () => {
    // your code here


    // let welcomeEl = document.getElementById("welcome-el")
    // Grab the welcome-el paragraph and store it in a variable called welcomeEl
    // let welcomeEl = document.getElementById("welcome-el")

    // Create two variables (name & greeting) that contains your name
    // and the greeting we want to render on the page

    // let name = "Konal Puri"
    // let greeting = "Welcome back "

    // Render the welcome message using welcomeEl.innerText
    // welcomeEl.innerText = greeting + name


    // let welcometext= document.getElementById("welcomez")
    // let name1 ="Konal Puri"
    // let greeting1="Hi "
    // let greeting2 = ", How are you doing!"

    // welcometext.innerText= greeting1+name1+greeting2




})