// Elements
const dayin = document.querySelector('#input__day')
const dayout = document.querySelector('#display__day')
const yearin = document.querySelector('#input__year')
const yearout = document.querySelector('#display__year')
const monthin = document.querySelector('#input__month')
const monthout = document.querySelector('#display__months')

const btn = document.querySelector('#btn')
const datesRequired = document.querySelector('.date__required')

// Utilities
let date = new Date()
const errorStyle = '0.5px solid hsl(0, 100%, 67%)'
const daysOption = [30,31]


// Code
btn.addEventListener('click', ()=>{
// Validate Day
let dayValue = dayin.value

if(dayValue === ''){
  datesRequired.style.display = 'block'
  dayin.style.border = errorStyle
  document.querySelector('#label__day').style.color ='hsl(0, 100%, 67%)'
}
else if(dayValue > daysOption){
  document.querySelector('.date__error').style.display='block'
  dayin.style.border = errorStyle
  document.querySelector('#label__day').style.color ='hsl(0, 100%, 67%)'
}
else{
  dayout.textContent = date.getDate() - dayValue
}

// Validate Month
  let monthValue = monthin.value
  if(monthValue === ''){
    // datesRequired.style.display = 'block'
    document.querySelector('.month').style.display='block'
    monthin.style.border = errorStyle
    document.querySelector('#label__month').style.color ='hsl(0, 100%, 67%)'

  }
  else if(monthValue > 12){
    document.querySelector('.month__error').style.display= 'block'
    monthin.style.border =errorStyle
    document.querySelector('#label__month').style.color ='hsl(0, 100%, 67%)'
  }
  else{
    monthout.textContent = date.getMonth()+1 - monthValue
  }

// Validate Year
  let yearValue = yearin.value
  if(yearValue === ''){
    document.querySelector('.year').style.display = 'block'
    yearin.style.border = errorStyle
    document.querySelector('#label__year').style.color ='hsl(0, 100%, 67%)'
  } 
  else if(yearValue > date.getFullYear()){
    document.querySelector('.year__error').style.display= 'block'
    yearin.style.border = errorStyle
    document.querySelector('#label__year').style.color ='hsl(0, 100%, 67%)'
    // displayError(document.querySelector('.year__error'),yearin,document.querySelector('#label__year'))
  } 
  else{
    yearout.textContent = date.getFullYear() - yearValue
  }
})

// function displayError(errorMessage, inputField, label) {
//   errorMessage.style.display = 'block';
//   inputField.style.border = errorStyle;
//   label.style.color = 'hsl(0, 100%, 67%)';
// }
