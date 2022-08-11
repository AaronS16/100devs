// modeling a dog
// const cali ={
//     name: 'cali',
//     species: 'GS',
//     size: 'large'
// }
// cali.bark = 'Grrr!'
// describe(dog){
//     console.log(`${dog.name} is a ${dog.species} dog measuring as a ${dog.size}`);
//     console.log(`look, a cat! ${dog.name} barks: ${dog.bark}`);
// }

//modeling a circle //
//const r = Number(prompt('Enter the circle radius:'));//

//modeling a bank account //
// const account ={
//     name: 'Alex',
//     balance: 0,
//     describe: 
// }

// function credit(addingNum){
    
// }

//object reading//
// let user = {
//     name: 'John',
//     surname: 'Smith',
// }
// user.name = 'Pete';
// delete user.name; 

// function isEmpty(obj) = {
//     for(let key in obj){
//         return false;
//     }
//     return true;
// }

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }
// // let sum = salaries.John + salaries.Ann + salaries.Pete
// // console.log(sum)
// let sum = 0;
// for(let key in salaries){
//     sum += salaries[key];
// }
// alert(sum);
let obj ={
    hello: 100,
    goodbye:300,
    welcome: 3452,
}
let product = 0;
function multiplyNumeric(obj){
    for(let key in obj){
        if (typeof obj[key] == 'number'){
            obj[key] *= 2;
        }
    }
}