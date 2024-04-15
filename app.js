const btnInformarDados = document.querySelector('#infm_dados')
const valor = document.querySelector("#valor")
const radios = document.querySelectorAll('input[name="forma"]')
const pix = document.querySelector(".pix_payment")
const creditCard = document.querySelector(".cc_payment")
const total = document.querySelector("#total")
const ccNum = document.querySelector("#num")
const noFees = document.querySelectorAll(".no_fee")
const fee4x = document.getElementById("4xpay")
const fee5x = document.getElementById("5xpay")
const parcelas = document.getElementById("parcelas")
const bandeira = document.getElementById("bandeira")
const cardErrorMsg = document.getElementById("invalid_cc_msg")
const pagar = document.getElementById("pagar")
const pixFormInputs = document.querySelectorAll(".pix_input")
const ccFormInputs = document.querySelectorAll(".cc_input")

let value;
let selectedRadio = getSelectedRadio();

radios.forEach(e => {
    e.addEventListener('click', ()=> {
        selectedRadio = e;
    })
})

ccNum.addEventListener('keyup', ()=> {
    if (ccNum.value.length >= 4) {
        let first4 = ccNum.value.substring(0, 4)
        bandeira.style.display = "block"
        switch (first4) {
            case "1234":
                bandeira.classList.remove("mastercard")
                bandeira.classList.remove("invalid_cc")
                bandeira.classList.add("visa")
                break;
            case "4321":
                bandeira.classList.remove("visa")
                bandeira.classList.remove("invalid_cc")
                bandeira.classList.add("mastercard")
                break;
            default:
                bandeira.classList.remove("visa")
                bandeira.classList.remove("mastercard")
                bandeira.classList.add("invalid_cc")
                break;
        }
    }else {
        bandeira.style.display = "none"
    }
})

pagar.addEventListener('click', ()=> {
    switch (selectedRadio.value) {
        case "pix":
            alert("Pagamento realizado com sucesso!\nDesconto de 10% aplicado!\nTotal: R$" + total.innerText)
            break;
        case "cc":
            ccFormInputs.forEach(e => {
                if (!e.value) {
                    alert("Preencha todos os campos")
                    return;
                }
            })

            if (bandeira.classList.contains("invalid_cc")) {
                alert("Número de cartão inválido")
                return;
            }

            alert(`Pagamento realizado com sucesso!\nTotal: R$${total.innerText}`)
            break;
        default:
            alert("Selecione uma forma de pagamento")
            break;
    }
})

parcelas.addEventListener('change', e => {
    let parce = parseInt(e.target.value)
    updateTotal(parce)
})

btnInformarDados.addEventListener('click', e => {
    e.preventDefault();

    let formatedValue = parseFloat(valor.value.replace(',', '.'))
    if (valorIsblank()) {
        alert("Informe um valor")
        return;
    } else if (!isNumber(formatedValue)) {
        alert("Informe um valor válido")
        return;
    } else {
        value = formatedValue.toFixed(2);
    }

    total.innerText = value;

    if(!selectedRadio) {
        alert("Selecione uma forma de pagamento")
        return;
    }

    displayCorrectForm(selectedRadio.value);
})

/**
 * Checks if the value of `valor` is blank.
 * @returns {boolean} Returns `true` if the value is blank, `false` otherwise.
 */
function valorIsblank() {
    return !valor.value;
}

function isNumber(n) {
    let numberRegex = /^-?\d+(\.\d+)?$/;
	return numberRegex.test(n);
}

function getSelectedRadio() {
    let radio = document.querySelector('input[name="forma"]:checked')
    return radio;
}

/**
 * Displays the correct form based on the selected payment method.
 * 
 * @param {string} str - The selected payment method ("pix" or "cc").
 */
function displayCorrectForm(str) {
    switch (str){
        case "pix":
            creditCard.classList.remove("show")
            pix.classList.add("show")
            setPixForm();
            break;
        case "cc":
            pix.classList.remove("show")
            creditCard.classList.add("show")
            setCCForm();
            break;
        default:
            alert("Selecione uma forma de pagamento")
            break;
    }
}

function setPixForm() {
    let discount = value * 0.1;
    total.innerText = (value - discount).toFixed(2);
}

function setCCForm() {
    let _ = 1;
    noFees.forEach(e => {
        e.innerText = (value / _).toFixed(2);
        _++;
    })
    fee4x.innerText = ((value * 1.05) / 4).toFixed(2);
    fee5x.innerText = ((value * 1.1) / 5).toFixed(2);
}

/**
 * Updates the total value based on the selected number of installments.
 * @param {number} parcelas - The selected number of installments.
 */
function updateTotal(parcelas){
    let taxa;
    switch (parcelas){
        case 4:
            taxa = 1.05;
            break;
        case 5:
            taxa = 1.1;
            break;
        default:
            taxa = 1;
            break;
    }
    total.innerText = (value * taxa).toFixed(2);
}