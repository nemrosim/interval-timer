const {of} = require('rxjs');
const {map} = require('rxjs/operators');


/**
 * Own operator. Pseudo-code
 * 1. "Operator" is just a simple function that returns another function;
 * 2. You can pass your own configuration params;
 */
const ownOperator = (configParam1, configParam2) => {
    return function (observable$) {
        return newObservable$;
    }
}

/*
        Example
 */

const observable$ = of(1, 2, 3, 4, 5);
const doubler = map(val=>val*2);


