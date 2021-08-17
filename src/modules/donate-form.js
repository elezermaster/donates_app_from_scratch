import {Settings as dollar}  from '../core/constants/settings'

export default class DonateForm{
    #container
    #totalAmount
    constructor(){
        this.#container = document.createElement('form')
        this.#container.className = 'donate-from'
        this.#totalAmount =28
    }

    updateTotalAmount(newAmount){
        this.#totalAmount+=newAmount
         const totalAmountH1 = document.querySelector('#totalAmount')
         totalAmountH1.innerHTML = this.#totalAmount+ dollar.currency
    }



    render(){
        const totalAmountH1 = document.createElement('h1')
        totalAmountH1.id = 'totalAmount'
        totalAmountH1.innerHTML =  this.#totalAmount + dollar.currency

        const inputLabel = document.createElement('h1')
        inputLabel.className = 'donate-form__input-label'
        inputLabel.innerHTML = 'Введите сумму в ' + dollar.currency

        const inputForm = document.createElement('input')
        inputForm.className = 'donate-form__donate-input'
        inputForm.name = 'amount'
        inputForm.type = 'number'
        inputForm.max = '100'
        inputForm.min = '0'
        inputForm.required = ''
        inputLabel.append(inputForm)

        const btnSubmit = document.createElement('button')
        btnSubmit.className = 'donate-form__submit-button'
        btnSubmit.type = 'submit'
        btnSubmit.innerHTML = 'Задонатить'


        this.#container.append( totalAmountH1, inputLabel, btnSubmit)
        return this.#container;
    }
}

{/* 
    <form class="donate-form">
    <h1 id="total-amount">28$</h1>
    <label class="donate-form__input-label">
        Введите сумму в $
        <input
            class="donate-form__donate-input"
            name="amount"
            type="number"
            max="100"
            min="0"
            required=""
        >
    </label>
    <button class="donate-form__submit-button" type="submit">
        Задонатить
    </button>
    </form>
 */}