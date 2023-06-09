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
  displayError(document.querySelector('.date'),dayin,document.querySelector('#label__day'))
}
else if(dayValue > daysOption){
  displayError(document.querySelector('.date__error'),dayin,document.querySelector('#label__day'))
}
else{
  dayout.textContent = date.getDate() - dayValue
}

// Validate Month
  let monthValue = monthin.value
  if(monthValue === ''){
    displayError(document.querySelector('.month'),monthin,document.querySelector('#label__month'))

  }
  else if(monthValue > 12){
    displayError(document.querySelector('.month__error'),monthin,document.querySelector('#label__month'))
  }
  else{
    monthout.textContent = date.getMonth()+1 - monthValue
  }

// Validate Year
  let yearValue = yearin.value
  if(yearValue === ''){
    displayError(document.querySelector('.year'),yearin,document.querySelector('#label__year'))
  } 
  else if(yearValue > date.getFullYear()){
    displayError(document.querySelector('.year__error'),yearin,document.querySelector('#label__year'))
  } 
  else{
    yearout.textContent = date.getFullYear() - yearValue
  }
})

function displayError(errorMessage, inputField, label) {
  errorMessage.style.display = 'block';
  inputField.style.border = errorStyle;
  label.style.color = 'hsl(0, 100%, 67%)';
}
