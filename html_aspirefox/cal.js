class Calculator {
    constructor(input, output) {
        this.inputDisplay = input;
        this.outputDisplay = output;
        this.inputHistory = [];
    }
    //   mainly reqired are input,output,history.

    // "this" is the refering to the current obj that is calculator.

    clearAllHistory() 
    {
        this.inputHistory = [];
        this.updateInputDisplay();
        //    nothing is seen here.
        this.updateOutputDisplay("0");
        //this will happen in the end of the calculators reset.
    }

    backspace() {
        switch (this.getLastInputType()) {
            case "number":
                if (this.getLastInputValue().length > 1) 
                // ofcourse more than 1
                {
                    this.editLastInput(this.getLastInputValue().slice(0, -1), "number");
                } 
                else {
                    this.deleteLastInput();
                }
                break;
            case "operator":
                this.deleteLastInput();
                break;
            default:
        }
        return;
    }

    //if given 75% then make it as 0.75    
    changePercentToDecimal() {
        if (this.getLastInputType() === "number") {
            this.editlastInput(this.getLastInputValue() / 100, "number");
        }
    }

    insertNumber(value)
     {
        if (this.getLastInputType == "number")
        {
            this.appendToLastInput(value);
        }
        else if (this.getLastInputType() == "operator" || this.getLastInputType() === null) {
            this.addNewType(value, "number");
        }
        // if last=op or not youcan still clkick on number button and add.
    }
    insertOperation(value) {
        switch (this.getLastInputType()) {
            case "number":
                this.addNewInput(value, "operator");
                break;
            case "operator":
                this.editLastInput(value, "operator");
                break;
            case "equals":
                let output = this.getOutputValue();
                this.clearAllHistory();
                this.addNewInput(output, "number");
                // u can still add new items to the output you got
                this.addNewInput(value, "operator");
                break;
            default:
                return;
        }
    }
    negateNumber() 
    {
        if (this.getLastInputType() === "number") 
        {
            this.editLastInput(parseFloat(this.getLastInputValue()) * -1, "number");
        }
    }

    generateResult(){
        if (this.getLastInputType() === "number") 
        {
            const self = this;
            const simplifyExpression = function (currentExpression, operator) {
                if (currentExpression.indexOf(operator) === -1) {
                    return currentExpression;
                } 
                else {
                    let operatorIdx = currentExpression.indexOf(operator);
                    let leftoperandIdx = operatorIdx - 1;
                    let rightOperandIdx = operatorIdx + 1;
                    let partialSolution = self.performOperation(...currentExpression.slice(leftoperandIdx, rightOperandIdx + 1));
                    currentExpression.splice(leftoperandIdx, 3, partialSolution.toString());
                    return simplifyExpression(currentExpression, operator);
                }

            }
        }
        let result = ["x", "÷", "-", "+"].reduce(simplifyExpression, this.getAllInputValues());
        this.addNewInput("=", "equals");
        this.updateOutputDisplay(result.toString());

    }




        // HELPER FUNCTIONS
        getLastInputType()
        {
            return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length - 1].type;
        }
        getLastInputValue()
        {
            return (this.inputHistory.length === 0) ? null : this.inputHistory[this.inputHistory.length - 1].value;
        }

        getAllInputValues(){
            return this.inputHistory.map(entry => entry.value);
            // returninh every new value of new array
        }

        getOutputValue(){
            return this.outputDisplay.value.replace(/,/g, '');
        }
        addNewInput(value, type){
            this.inputHistory.push({ "type": type, "value": value.toString() });
            this.updateInputDisplay();
        }
        appendToLastInput(value){
            this.inputHistory[this.inputHistory.length - 1].value += value.toString();
            // adding to the last element.
            this.updateInputDisplay();
        }

        editLastInput(value, type){
            this.inputHistory.pop();
            this.addNewInput(value, type);
        }

        deleteLastInput(){
            this.inputHistory.pop();
            // aftr deleting you need to again update the result.
            this.updateInputDisplay();
        }

        updateInputDisplay()
        {
            this.inputDisplay.value = this.getAllInputValues().join("");
        }

        // after gtting new array, u can join more input elements to it without spacce
        // [1 2 5]..125 is seen in the display.


        // zero will be passed here ,and shall get as a string.
        updateOutputDisplay(value)
        {
            this.outputDisplay.value = Number(value).toLocaleString();
        }


        performOperation(leftoperand, operation, rightOperand)
        {
            leftoperand = parseFloat(leftoperand);
            rightOperand = parseFloat(rightOperand);
            if (Number.isNaN(leftoperand) || Number.isNaN(rightOperand)) 
            {
                return;
            }
            switch (operation) 
            {
                case "x":
                    return leftoperand * rightOperand;
                case "+":
                    return leftoperand / rightOperand;
                case "-":
                    return leftoperand - rightOperand;
                case "+":
                    return leftoperand + rightOperand;

            }

        }
    }
    // End Calculator Class Definition

    //to access DOM elements //Create bindings
    const inputDisplay = document.querySelector("#history");
    const outputDisplay = document.querySelector("#result");
    const allClearButton = document.querySelector("[clear]");
    const backspaceButton = document.querySelector("[backspace]");
    const percentButton = document.querySelector("[percent]");
    const operationButtons = document.querySelectorAll("[operator]");
    const numberButtons = document.querySelectorAll("[number]");
    const negationButton = document.querySelector("[negation]");
    const decimalButton = document.querySelector("[decimal]");
    const equalsButton = document.querySelector("[equals]");


    // Createanew Calculator objectttttttt
    const calculator = new Calculator(inputDisplay, outputDisplay);

// Add event handlers to the calculator buttons
allClearButton.addEventListener("click",()=>{
    calculator.clearAllHistory();
    //obj.function();
});

backspaceButton.addEventListener("click",()=>{
    calculator.backspace();
});

percentButton.addEventListener("click", () => {
    calculator.changePercentToDecimal();

});

operationButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let { target } = event;
        calculator.insertOperation(target.dataset.operator);
    })
});

//   target.dataset.numbers
numberButtons.forEach(button => {
    button.addEventListener("click", (event) => {
        let { target } = event;
        calculator.insertNumber(target.dataset.number);
    })
});


negationButton.addEventListener("click", () => {
    calculator.negateNumber();
});


decimalButton.addEventListener("click", () => {
    calculator.insertDecimalPoint();
});

equalsButton.addEventListener
("click", () => {

    calculator.generateResult();
})