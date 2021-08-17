import {Settings as dollar}  from '../core/constants/settings'
import * as utils from '../core/utils/index'

export default class DonateList{

    constructor(mockDonates){
        this.donates =  mockDonates
        console.log('DonateList this.donates',this.donates)
    }

    updateDonates(updatedDonates){
        console.log('updatedDonates',updatedDonates)
        if(updatedDonates != null){
            this.donates.push({ amount: updatedDonates.amount ,date: updatedDonates.date})
        }
        console.log('this.donates',this.donates)
        
        let myDonatesContainer= document.querySelector('.donates-container__donates')
        if(myDonatesContainer != null){
            myDonatesContainer.innerHTML=''
        }
        this.donates.forEach(elem =>{
            const donateItem = document.createElement('div');
            donateItem.className = 'donate-item'
            const bItem = document.createElement('b');
            bItem.textContent = elem.amount +dollar.currency
            donateItem.innerHTML = `${utils.getFormattedTime(elem.date)} - `
            donateItem.append(bItem)
            myDonatesContainer.append(donateItem)
        })
    }

    render(){

        const donatesContainer = document.createElement('div');
        donatesContainer.className = 'donates-container'

        const titleH2 = document.createElement('h2');
        titleH2.className = 'donates-container__title'
        titleH2.innerHTML = 'Список донатов'
        donatesContainer.append(titleH2)

        let donatesContainerDonates = document.createElement('div');
        donatesContainerDonates.className = 'donates-container__donates'

        donatesContainer.append(donatesContainerDonates)
        return donatesContainer

        // <div class="donates-container">
        //     <h2 class="donates-container__title">Список донатов</h2>
        //     <div class="donates-container__donates">
        //         <div class="donate-item">July 6th 2021, 10:28:49 am - <b>4$</b></div>
        //         <div class="donate-item">July 6th 2021, 10:28:49 am - <b>20$</b></div>
        //         <div class="donate-item">July 6th 2021, 10:28:49 am - <b>3$</b></div>
        //         <div class="donate-item">July 6th 2021, 10:28:49 am - <b>1$</b></div>
        //     </div>
        // </div>
    }
}