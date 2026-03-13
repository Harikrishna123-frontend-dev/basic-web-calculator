let num1 = 50
let num2 = 25

let numEl1 = document.getElementById("num1-el")
console.log(numEl1)
let numEl2 = document.getElementById("num2-el")
console.log(numEl2)

numEl1.textContent = num1
numEl2.textContent = num2

let sumEl = document.getElementById("sum-el")
console.log(sumEl)

function addFunc() {
    console.log("Add button clicked")
    addResult = num1 + num2
    sumEl.textContent = "Sum: " + addResult
    console.log(sumEl.textContent)

}

function subtractFunc() {
    console.log("Subtract button clicked")
    subtractResult = num1 - num2
    sumEl.textContent = "Sum: " + subtractResult
    console.log(sumEl.textContent)
}

function multiplyFunc() {
    console.log("Multiply button clicked")
    multiplyResult = num1 * num2
    sumEl.textContent = "Sum: " + multiplyResult
    console.log(sumEl.textContent)
}

function divideFunc() {
    console.log("Divide button clicked")
    divideResult = num1 / num2
    sumEl.textContent = "Sum: " + divideResult
    console.log(sumEl.textContent)
}


