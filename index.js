const buttonTip = document.querySelector("#addTip");

buttonTip.addEventListener("click", choiceTip);

function choiceTip(e) {
    e.preventDefault();
    tip.style.display = "block"
}

const buttonCalculate = document.querySelector("#btn");

buttonCalculate.addEventListener("click", calculateAmount);

function calculateAmount(e) {
    e.preventDefault();
    const bill = document.querySelector("#bill").value;
    const people = document.querySelector("#people").value;
    const tip = document.querySelector("#tip").value;

    if (bill === "" || people === "" || people < 1 || isNaN(bill) || isNaN(people)) {
        Swal.fire({
            icon: 'error',
            title: 'error...',
            text: 'Please enter your information!',
        })
        return false
    }

    let amountPerPerson = bill / people;
    let tipPerPerson = (bill * tip) / people;
    let totalPerPerson = amountPerPerson + tipPerPerson;

    amountPerPerson = amountPerPerson.toFixed(2);
    tipPerPerson = tipPerPerson.toFixed(2);
    totalPerPerson = totalPerPerson.toFixed(2);

    document.querySelector("#dividedBill").textContent = amountPerPerson;
    document.querySelector("#dividedTip").textContent = tipPerPerson;
    document.querySelector("#billAndTip").textContent = totalPerPerson;

    document.querySelector("#bill").value = "";
    document.querySelector("#people").value = "";
}


