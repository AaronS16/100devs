//Object Test 1
const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;

//Object Test 2

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

//Object Test 3

let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }

let sum = 0;
for(let key in salaries) {
    sum += salaries[key];
}

alert(sum);

//Object Test 4

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };