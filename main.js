
const calculator = document.getElementById('calculatorWrap')
const buttons = calculator.querySelectorAll('button')
let display = calculator.querySelector('.display')
const deleteAll = document.getElementById('deleteAll')
const del = document.getElementById('delete')
const result = document.getElementById('result')
const percentage = document.getElementById('percentage')

let displayText = []

buttons.forEach(btn => {

    btn.addEventListener('click', () => {
        
        if (btn.id != del.id && btn.id != deleteAll.id) {
            displayText.push(btn.value)
            display.innerHTML = displayText.join('')
        }

        if (btn.id === deleteAll.id) {
            display.innerHTML = 0
            displayText = []
        }

        if (btn.id === percentage.id) {
            displayText.pop()
            let calculated = eval((displayText.join('') / 100))
            display.innerHTML = calculated
            displayText = [calculated]
        }
        
        if (btn.id === del.id) {
            displayText.pop()
            let joinedArray = displayText.join('')
            display.innerHTML = joinedArray
            
            if (joinedArray === '') {
                display.innerHTML = 0
                displayText = []
            }
        }
        
        if (btn.id === result.id) {
            let result

            if (displayText.join('') != '') {
                result = eval(displayText.join(''))
            } else {   
                result = 0
                displayText = []
            }

            display.innerHTML = result
        }
    
    })
});