const tipButton = document.querySelectorAll(".tip-button")
const billAmount = document.querySelector(".bill")
const peopleCount = document.querySelector(".people-count")
const tipAmount = document.querySelector(".tip-amount-price")
const totalPrice = document.querySelector(".total-price")
const resetButton = document.querySelector(".reset-button")
const customPercent = document.querySelector(".tip-input")

let tipPercent = 0

tipButton.forEach(cell => {
    cell.addEventListener('click', tipChoose);
})

customPercent.addEventListener('change', (e) => {
    tipPercent = customPercent.value

    const tip = (billAmount.value * tipPercent)
    const total = billAmount.value + tip

    tipAmount.textContent = `$${(tip / peopleCount.value).toFixed(2)}`
    totalPrice.textContent = `$${(total / peopleCount.value).toFixed(2)}`
})

function tipChoose(e) {
    const boutonCliquee = e.target
    const boutonDataIndex = boutonCliquee.getAttribute('data-index')

    const tip = (billAmount.value * boutonDataIndex)

    tipAmount.textContent = `$${(tip / peopleCount.value).toFixed(2)}`
    totalPrice.textContent = `$${(billAmount.value / peopleCount.value).toFixed(2)}`
}

resetButton.addEventListener('click', resetShit)

function resetShit() {
    billAmount.value = "0"
    peopleCount.value = "0"
    tipAmount.textContent = "$0"
    totalPrice.textContent = "$0"
    customPercent.value = ""
}