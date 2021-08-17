import moment from 'moment';



export function calculateSumOfNumbers(numbers){
    let sum = 0;
    numbers.forEach(number =>{
        sum+=number;
    })
    return sum;
}

export function getFormattedTime(date){
    return moment(date).format('MMMM Do YYYY, h:mm:ss a')
}
