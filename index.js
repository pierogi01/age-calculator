const inputDateEl = document.getElementById("inputDate")
const calculateBtn = document.getElementById("calculate-btn")
const ageEl = document.getElementById("age-el")

const currDate = new Date();
let currDay = currDate.getDate();
let currMonth = currDate.getMonth() + 1;
let currYear = currDate.getFullYear();

const startYear = 1970;
const minute = 1000*60
const hour = minute*60
const day = hour*24
const year = day*365;

calculateBtn.addEventListener("click", function(){
    let dateValue = inputDateEl.value
    const datep=Date.parse(dateValue)
    let ageZero = currYear - startYear
    let age = Math.round(datep/year - ageZero)
    if(age<0){
        ageEl.innerHTML = `Your age is ${age*(-1)} years old`
    }else{
        ageEl.innerHTML = `Your age is ${age} years old`
    }
})


