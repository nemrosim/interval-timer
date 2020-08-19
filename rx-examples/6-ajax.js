const {ajax} = require('rxjs/ajax');
const {of} = require('rxjs');

// Solves CORS issue in Node
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

of('hello') // just for demo. It could be an Event...
    .subscribe(() => {
        ajax({
            url: 'http://worldclockapi.com/api/json/est/now',
            method: 'GET',
            // ! Solves CORS issue
            crossDomain: true,
            // ! Solves CORS issue
            createXHR: function () {
                return new XMLHttpRequest();
            }
        })
            .subscribe(response => {
                console.log(response.response);
            })
    })

