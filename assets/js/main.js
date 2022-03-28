const squares = document.getElementById('squares')

for (let number = 1; number <= 100; number++){
    console.log(number);

    if (number % 3 == 0 && number % 5 !== 0){
        let squareLittle = `<div class="square fizz">Fizz</div>`
        squares.insertAdjacentHTML('beforeend', squareLittle)
    } else if (number % 5 == 0 && number % 3 !== 0){
        let squareLittle = `<div class="square buzz">Buzz</div>`
        squares.insertAdjacentHTML('beforeend', squareLittle)
    } else if (number % 5 == 0 && number % 3 == 0){
        let squareLittle = `<div class="square fizz-buzz">FizzBuzz</div>`
        squares.insertAdjacentHTML('beforeend', squareLittle)
    }else {
        let squareLittle = `<div class="square">${number}</div>`
        squares.insertAdjacentHTML('beforeend', squareLittle)
    }



    
    

    /* squares.insertAdjacentHTML('beforeend', squareLittle) */


}


/* 
let squareLittle = `<div class="square">${Fizz}</div>`
    let squareLittle = `<div class="square">${Buzz}</div>` */