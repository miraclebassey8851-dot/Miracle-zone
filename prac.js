// alert("fuckers")
const body = document.querySelector(".body")
const button = document.querySelector(".button")
const nameb = document.querySelector(".nameb")
const passb = document.querySelector(".passb")
const error = document.querySelector(".error")
const another = document.querySelector(".another")
// const page = document.querySelector("page")


// console.log(button)

// button.addEventListener("click", function(){

   
//     if(nameb.value == ""){
//         nameb.style.backgroundColor = "rgba(88, 1, 1, 0.3)"
//         nameb.style.borderColor = "red"
//         error.textContent = "Please Enter Username"
//         return;
//     }

//       if(passb.value == ""){
//         passb.style.backgroundColor = "rgba(88, 1, 1, 0.3)"
//         error.textContent = "Please Enter Password"
//         passb.style.borderColor = "red"
//         return;
//     }

// })

// nameb.addEventListener("input", function(){
//     nameb.style.backgroundColor = ""
//     nameb.style.borderColor = ""
// })
// passb.addEventListener("input", function(){
//     passb.style.backgroundColor = ""
//     passb.style.borderColor = ""
// })






// button.addEventListener("click", function(){
//     body.classList.add("hidden")
//     another.classList.remove("hidden")


// })



button.addEventListener("click", function(){

    if(nameb.value == ""){
        nameb.style.backgroundColor = "rgba(88, 1, 1, 0.3)"
        nameb.style.borderColor = "red"
        error.textContent = "Please Enter Username"
        return;
    }

    if(passb.value == ""){
        passb.style.backgroundColor = "rgba(88, 1, 1, 0.3)"
        passb.style.borderColor = "red"
        error.textContent = "Please Enter Password"
        return;
    }

    body.classList.add("hidden")
    another.classList.remove("hidden")
})

nameb.addEventListener("input", function(){
    nameb.style.backgroundColor = ""
    nameb.style.borderColor = ""
})
passb.addEventListener("input", function(){
    passb.style.backgroundColor = ""
    passb.style.borderColor = ""
})


    
    
