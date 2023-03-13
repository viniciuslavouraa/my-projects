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

        // Check if current is empty
        if (this.currentOperationText.innerText === '' && operation !== 'C') {
            // change operation
            if (this.previousOperationText.innerText !== '') {
                this.changeOperation(operation)
            }
            return
        }
        
        // Get current and previuos value
        let operationValue;
        const previous = +this.previousOperationText.innerText.split(' ')[0]
        const current = +this.currentOperationText.innerText

        switch (operation) {
            case '+':
                operationValue = previous + current ;
                this.updateScreen(operationValue, operation, current, previous )
            break;
            case '-':
                operationValue = previous - current ;
                this.updateScreen(operationValue, operation, current, previous )
            break;
            case '/':
                operationValue = previous / current ;
                this.updateScreen(operationValue, operation, current, previous )
            break;
            case 'x':
                operationValue = previous * current ;
                this.updateScreen(operationValue, operation, current, previous )
            break;
            case 'DEL' :
                this.processDelOperator()
            break
            case 'Ce':
                this.processClearCurrentOperator()
            break;
            case 'C':
                this.processClearAllOperator()
            break;
            case '=':
                this.processEqualOperation()
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
            //add current value to previous
            this.previousOperationText.innerText = `${operationValue} ${operation}`
            this.currentOperationText.innerText = ''
            this.processEqualOperation()
        }
    }

    // change math operations
    changeOperation(operation) {
        const mathOperations = ['*', '/', '+', '-']

        if (!mathOperations.includes(operation)) {
            return
        }

        this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation
    }
    // Delete de last digit
    processDelOperator() {
        this.currentOperationText.innerText = this.currentOperationText.innerText.slice(0, -1)
    }
    // Clear current operator
    processClearCurrentOperator() {
        this.currentOperationText.innerText = ''
    }
    // Clear all operations
    processClearAllOperator() {
        this.previousOperationText.innerText = ''
        this.currentOperationText.innerText = ''
    }
    // process an operation
    processEqualOperation() {
        const operation = previousOperationText.innerText.split(' ')[1]
        this.processOperation(operation)
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
