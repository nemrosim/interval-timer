const {from} = require('rxjs');

const someArray = [
    {
        id:1,
        name: 'One'
    },
    {
        id:2,
        name: 'Two'
    },
    {
        id:3,
        name: 'Three'
    },
    {
        id:4,
        name: 'Four'
    }
];

from(someArray).subscribe(val=>console.log(val));

