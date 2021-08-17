import DonateForm from './donate-form'
import DonateList from './donate-list'
import * as utils from '../core/utils/index'
 
const mockDonates = [
    { amount: 4, date: new Date() },
    { amount: 20, date: new Date() },
    { amount: 3, date: new Date() },
    { amount: 1, date: new Date() },
 ];

class App{
    #donateForm
    #donateList
    #state
   
    constructor(donates =mockDonates, totalAmount =0){
        this.#state = Object.create({donates: donates, totalAmount: totalAmount});
        this.#state.totalAmount = utils.calculateSumOfNumbers(mockDonates.map(el=>el.amount))
        this.#donateForm = new DonateForm(this.#state.totalAmount)
        this.#donateList = new DonateList(this.#state.donates)
    }
    //this.createNewDonate.bind(this).
    createNewDonate(newDonate){
        console.log('newDonate',newDonate)
        this.#state.donates={
            ...this.#state.donates,
            ...newDonate.donates
        }
        console.log('this.#state.donates',this.#state.donates)
        this.#state.totalAmount = newDonate.totalAmount
        console.log('this.#state.totalAmount',this.#state.totalAmount)
        this.#donateForm.updateTotalAmount(this.#state.totalAmount)
        this.#donateList.updateDonates(newDonate.donates)
    }

    run(){
        const donateFormHTML = this.#donateForm.render()
        document.body.append(donateFormHTML)
        const donateListHTML = this.#donateList.render()
        document.body.append(donateListHTML)
        this.#donateList.updateDonates(null)
        document.querySelector('.donate-from')
            .addEventListener('submit',(event)=>{
                event.preventDefault()

                const inputField = document.querySelector('.donate-form__donate-input')
                const newValue = inputField.value
                console.log(
                    'newValue ', newValue
                )
                const newDonate = Object.create({ amount: newValue, date: new Date() });
                const newDonates = Object.create({donates: newDonate, totalAmount: Number(newValue)});
                console.log(newDonates)
                inputField.value=''
                this.createNewDonate(newDonates)
            })
    }
}

export {
    App,
}