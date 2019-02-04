const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//   for(let i = 0; i < companies.length; i++){
//       console.log(companies[i].name);
//   }

// FOR EACH - calls a function to do on all the items in the array where:
// the argument to the function, is an object in the array
companies.forEach(function(company){
    console.log(company.name)
});


// FILTER

// before:
// var canDrink = [];
// for(let i = 0; i < ages.length; i++){
//     if(ages[i] >= 18){
//         canDrink.push(ages[i])
//     }
// }
// console.log(canDrink);

// const canDrink = ages.filter(function(age){
//     return age >= 18;
// });

const canDrink = ages.filter(age => age >= 18 );
console.log(canDrink);

const retailCompanies = companies.filter(company => company.category === "Retail");
console.log(retailCompanies);

const eightiesCompanies = companies.filter(company => company.start >=1980 && company.start < 1990);
console.log(eightiesCompanies);


// MAP

const agesSquared = ages.map(num => num * num);
console.log(agesSquared);

const companyNames = companies.map(comp => comp.name);
console.log(companyNames);

// SORT

const agesSortedAscending = ages.sort((n1, n2) => (n1 > n2 ? 1 : -1));
console.log(agesSortedAscending);

// REDUCE
// let ageSum = 0;
// for(let i = 0; i < ages.length; i++){
//     ageSum += ages[i];
// }
// console.log(ageSum);

const ageSum = ages.reduce(function(total, age){
    return total + age;
}, 0);