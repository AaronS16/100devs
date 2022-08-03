// function countBy(x, n) {
//     let z = [];
//     for (let i = 1; i <= n; i++) {
//       z.push(x * i);
//     }
//     return z;
//   }
//   console.log(countBy(2,8))

//   function even_or_odd(number) {
//     if (number % 2 === 0) {
//       console.log('Even')
//     } else console.log('Odd')
//   }
//   even_or_odd(2)

const musketeers = ["Athos", "Porthos", "Aramis"]

for (i=0; i < musketeers.length; i++) {
    console.log(musketeers[i])
}
musketeers.push("D'Artagnan")
console.log(musketeers)

musketeers.forEach(musketeer => {
    console.log(musketeer);
});

musketeers.pop();
console.log(musketeers[2]);