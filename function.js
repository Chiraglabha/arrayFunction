

//............... concat..................// 

let device = ['Mobile','Laptop','Desktop','Tablet'];
let parts = ['Motherbord','Memory','Battry','Speaker'];

console.log(device.concat(parts));

//... output - ['Mobile','Laptop','Desktop','Tablet','Motherbord','Memory','Battry','Speaker']...//
 


// .............copywithin............//

let ans = device.copyWithin(2,0,4);
console.log(ans);

//....output - [ 'Mobile', 'Laptop', 'Mobile', 'Laptop' ]...........//



//...........constructer............//

console.log(parts.constructor);

//..... output - ƒ Array() { [native code] }........//



//.......... entries............//

let ans1 = device.entries();

for(let x of ans1) {
    console.log(x);
}

//........output.........//

//    [ 0, 'Mobile' ]
//    [ 1, 'Laptop' ]
//    [ 2, 'Mobile' ]
//    [ 3, 'Laptop' ]



//..........evrey.........//

let chocolate = [10,3,20,5,14]

console.log(chocolate.every(myFunction));

function myFunction (choco) {
    return choco > 5 ;
}

//.......output - false... //



// .........fill..........//

let amount = [50,60,80,90,100,110]

console.log(amount.fill(150,2,4));

// .......output - [ 50, 60, 150, 150, 100, 110 ] .....//



// .......filter........//

console.log(chocolate.filter(myFunction2));

function myFunction2 (choco) {
    return choco > 5 ;
}

//......output - [ 10, 20, 14 ].......//


//.........findIndex()........//

console.log(amount.findIndex(myFunction1));

function myFunction1 (am) {
    return am > 80 ;
}

//......output - 2 .........//



//........... forEach..........// 

let  names = ['Dev','Chirag','Sem','Om'];

names.forEach(myFunction);

function myFunction (item,index,arr) {
   arr[index] = 'Hello ' + item ;
}

console.log(names);

//...output- [ 'Hello Dev', 'Hello Chirag', 'Hello Sem', 'Hello Om' ]......//



//..........from.........//

const string = 'Chirag';

console.log(Array.from(string));

//.......output - [ 'C', 'h', 'i', 'r', 'a', 'g' ]..........//



// ........includes..........//

let age = [20,25,10,15,22];

console.log(age.includes(26));

//......output - false.......//



//......... indexof..........//

console.log(age.indexOf(25));

//.........output - 1.........//



//........... isArray........//

console.log(Array.isArray(age));

//.........output - true.........//



//............. join.............//

let devices = ['Mobile','Laptop','Desktop','Tablet'];

console.log(devices.join(' and '));

//........output - Mobile and Laptop and Desktop and Tablet........//



//........... keys...........//

let keys = devices.keys();

let txt = "";

for(x of keys) {
    txt += x;
}

console.log(txt);

//......output - 0123........//



//...........map............//

const number = [20,25,30,35];

let multi =  number.map(myFunction)

function myFunction(n) {
    return n * 10;
}

console.log(multi);

//.......output - [ 200, 250, 300, 350 ]..........//



//...........pop.............//

devices.pop();
console.log(devices);

//........output - [ 'Mobile', 'Laptop', 'Desktop' ].........//



//......... prototype..........//

let budget = [1000,200,1500,500,800];

Array.prototype.myFunction1 = function() {
    for(let i=0;i<this.length;i++) {
        if(this[i] > 600)
        this[i] = 'car';
        else
        this[i] = 'Bike';
    }
}

budget.myFunction1();

console.log(budget);

//....output - [ 'car', 'Bike', 'car', 'Bike', 'car' ]......./



//..........push..........//

let fruit = ['Mango','Kiwi','Banana','Apple'];

fruit.push('Orange');
console.log(fruit);

//......output - [ 'Mango', 'Kiwi', 'Banana', 'Apple', 'Orange' ]........//



//..........reduce...........//

const data = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

const flat = data.reduce((total, amount) => {
  return total.concat(amount);
}, []);

console.log(flat);

//........output - [1, 2, 3, 4, 5, 6, 7, 8, 9]........// 



//.........rightreduce..........//

const flat1 = data.reduceRight((total, amount) => {
  return total.concat(amount);
}, []);

console.log(flat1);

//.......output - [7, 8, 9, 4, 5, 6, 1, 2, 3]........//



//............ revrse............//

console.log(flat.reverse());

//........output - [9, 8, 7, 6, 5, 4, 3, 2, 1]..........//



//............slice............//

let  color = ['red','blue','black','white'];

console.log(color.slice(1,3));

//.......output - [ 'blue', 'black' ]...........//



//...........some.........//

console.log(color.some(checklength));

function checklength(len) {
    return (len.length < 4)
}

//........output - true..............//



//...........sort..............//

console.log(color.sort());

//.......output - [ 'black', 'blue', 'red', 'white' ]........//



//..........splice............//

color.splice(3,1,'brown');
console.log(color);

//.....output - [ 'black', 'blue', 'red', 'brown' ]........//



//.............toString...........//

console.log(color.toString());

//......output - black,blue,red,brown..........//



//..............unshift.................//

color.unshift('green');

console.log(color);

//........output - [ 'green', 'black', 'blue', 'red', 'brown' ]..........//



//............ valueof..........//

console.log(color.valueOf());

//........output - [ 'green', 'black', 'blue', 'red', 'brown' ]..........//