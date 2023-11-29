const users = [{
    name: "Anil",
    age: 21,
},
{
    name: "Ahmet",
    age: 18,
},
{
    name: "Mehmet",
    age: 29,
},
];


/*
push   :  Array e eleman ekler.
map    : Array'in her elemanını döner.
find   : Array içinde verilen koşullarda arama yapar.
filter : Filtreleme yapar.
some   : Arrayin içindeki elemanlardan herhangi biri koşula uyuyorsa true döner.
every  : Arrayin bütün elemanlarının verilen şarta uyup uymadığını kontrol eder.
includes : Array'in verilen elemanı içerip içermediğini kontrol eder
*/

//* push
// users.push('Ayşe');
// console.log(users);

//* map
// users.map((item) => {
//     console.log(item)
// })


//* find
// const result = users.find((item) => item.name === "Mehmet" && item.age > 20);
// console.log(result);


//* filter
// const filtered = users.filter((item) => item.name === "Mehmet");
// console.log(filtered);

//* some
// const some = users.some((item)=>item.age === 18);
// console.log(some);
