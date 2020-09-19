
const engg = [{name: 'shivaraj', age: 21}, { name: 'trippy', age: 22 }];

function makeGreen() {
    const p = document.querySelector('p');
    p.style.color = 'BADASS';
    p.style.fontSize = '50px'; 
}


// Regular
console.log('hello');

// Interpolate
// console.log('I m a %s Loni!', 'shivaraj');
let v = 'shivaraj Loni';
console.log(`Hello I am ${v}`);

// styled                   use %c infront of the text your what to style, & u can add ur css
console.log(' %c I am awsome', 'font-size: 50px; background: red; text-shadow: 10px 10px 0 blue');

// warning
console.warn('OHHHHH NO!');

// Error            
console.error('!!!SHIT');

// Info      gives u some info.
console.info('Crocodiles eat 3-4 people per year');

// Testing      use "assert", it will give error when the condition fails 
console.assert(1 === 2, 'that is wrong!');
console.assert(1 === 1, 'that is wrong!');      // in this case, not display anything on the console!

const p = document.querySelector('p');

    console.assert(p.classList.contains('ouch'), 'That is wrong!');      // dispalys the ERROR! as "Assertion Failed"

//clearing
 console.clear();           // clears ur console!

// Viewing DOM Elements
console.log(p);    // let u to view the p-tag from html
console.dir(p);    // let u the entire list of p-tag

// console.clear();

// Grouping together
engg.forEach(engg => {
// console.groupEnd(`${engg.name}`);  
  console.groupCollapsed(`${engg.name}`);
  console.log(`This is ${engg.name}`);
  console.log(`${engg.name} is ${engg.age} years old`);
  console.log(`${engg.name} is ${engg.age * 7} decade years old`);
  console.groupEnd(`${engg.name}`);
});

// counting

console.count('Wes');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');
console.count('Steve');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')                // uses Promises of JS
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

console.table(dogs);
