// Elements
const dayin = document.querySelector('#input__day')
const monthin = document.querySelector('#input__month')
const yearin = document.querySelector('#input__year')
const yearout = document.querySelector('#display__year')
const monthout = document.querySelector('#display__months')
const dayout = document.querySelector('#display__day')
const btn = document.querySelector('#btn')
const datesRequired = document.querySelector('.date__required')
let date = new Date()
const errorStyle = '0.5px solid hsl(0, 100%, 67%)'



// Code
btn.addEventListener('click', ()=>{
  // validate all input
  const D = dayin.value
  const M = monthin.value
  const Y = yearin.value
const birthday = `${D}-${M}-${Y}`
if(birthday === '' ){
  console.log('empty')
}
  else{
    console.log(birthday)
  }

})

// let monthValidation = ()=>{
//     let currMonth = date.getMonth()+1
//     let monthsValue = document.querySelector('#month').value
//     let ageInMonths = currMonth - monthsValue
//     document.querySelector('.display__months').innerText = ageInMonths

//     if(monthsValue > currMonth || monthsValue === ''){
//       document.querySelector('.display__months').innerText = '--'
//       required.style.display='block'
//       input.style.border = '1px solid red'
//       label.style.color = 'red'
//     } 
// }

// let dateValidation = ()=>{
//   let currDate = date.getDate()
//   let dateValue = document.querySelector('#day').value
//   let ageInDate = currDate - dateValue
//   document.querySelector('.display__days').innerText = ageInDate

//   if(dateValue > currDate || dateValue === ''){
//     document.querySelector('.display__days').innerText = '--'
//     required.style.display='block'
//     input.style.border = '1px solid red'
//   } 
// }

// let yearValidation = ()=>{
//   let currYear = date.getFullYear()
//   let yearValue = document.querySelector('#year').value
//   let ageInYears = currYear - yearValue
//   document.querySelector('.display__year').innerText = ageInYears

//   if(yearValue > currYear || yearValue === ''){
//     document.querySelector('.display__year').innerText = '--'
//     required.style.display='block'
//     input.style.border = '1px solid red'
//   } 
// }