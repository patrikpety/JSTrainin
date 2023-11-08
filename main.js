
const calculator = document.querySelector('#calculatorWrap')
const buttons = calculator.querySelectorAll('button')
let display = calculator.querySelector('.display')
const deleteAll = document.getElementById('deleteAll')
const del = document.getElementById('delete')
const result = document.getElementById('result')
const percentage = document.getElementById('percentage')

let displayText = []

buttons.forEach((btn) => {

    btn.addEventListener('click', () => {
        
        if (btn.id != del.id && btn.id != deleteAll.id) {
            displayText.push(btn.value)
            display.innerHTML = displayText.join('')
        }

        if (btn.id === deleteAll.id) {
            display.innerHTML = '0'
            displayText = []
        }

        if (btn.id === percentage.id) {
            displayText.pop()
            let calculated = eval((displayText.join('')/100))
            display.innerHTML = calculated
            displayText = []
            displayText = [calculated]
        }
        
        if (btn.id === del.id) {
            displayText.pop()
            display.innerHTML = displayText.join('')
            
            if (displayText.join('') === '') {
                display.innerHTML = '0'
                displayText = []
            }
        }
        
        if (btn.id === result.id) {

            if (displayText.join('') != '') {
                display.innerHTML = eval(displayText.join(''))
            } else {
                displayText = [0]
                display.innerHTML = displayText.join('')
                displayText = []
            }
        }

    })
});