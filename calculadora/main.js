const previousOperationText = document.querySelector('#previous-operation')
const currentOperationText = document.querySelector('#current-operation')
const buttons = document.querySelectorAll('#buttons-container button')
class Calculator {
    constructor(previousOperationText, currentOperationText) {
        this.previousOperationText = previousOperationText
        this.currentOperationText = currentOperationText
        this.currentOperation = ''
    }
    // add digit to calculator screen
    addDigit(digit) {
        // Check if current operation alredy has a dot
        if(digit == '.' && this.currentOperationText.innerText.includes('.') ) {
            return
        }

        this.currentOperation = digit
        this.updateScreen()
    }

    // Process all calculator operations
    processOperation(operation) {
        

        // Get current and previuos value
        let operationValue ;
        const previous = +this.previousOperationText.innerText
        const current = +this.currentOperationText.innerText

        switch (operation) {
            case '+':
                operationValue = previous + current ;
                this.updateScreen(operationValue, operation, previous, current )
            break;
            default:
                return;
        }
    }

    // Change values of the calculator screen
    updateScreen(
        operationValue = null, 
        operation = null, 
        current = null,
        previous = null, 
    ) {
        if ( operationValue == null) {
            this.currentOperationText.innerText += this.currentOperation;
        } else {
            // check if values is 0, if it is just add current value
            if (previous == 0) {
                operationValue = current
            }

            //continuar adicionando operadores a calculadora


            //add current value to previous
            console.log(`${operationValue} ${operation}`)
            this.previousOperationText.innerText = ` ${operationValue} ${operation}`
            this.currentOperationText.innerText = ''
        }
    }
}
 const calc = new Calculator (previousOperationText, currentOperationText)

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        const value = e.target.innerText
        if (+value >= 0 || value == '.') {
            calc.addDigit(value)
        } else {
            calc.processOperation(value)
        }
    })
})
