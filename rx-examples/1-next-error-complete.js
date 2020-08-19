const {Observable} = require('rxjs');

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

const subscribe = (subscriber) => {
    // var 1
    // for (let book of someArray){
    //     subscriber.next(book);
    // }

    const interval = setInterval(()=>{
        console.log('Interval. Print something...')
    },[1000]);

    // var 2
    someArray.forEach(element=>{
        subscriber.next(element);
        if(element.id===5){
            subscriber.error('some error');
        }
    })

    setTimeout(()=>{
        console.log('Timeout. Subscriber.complete()')
        subscriber.complete();
    },[2000]);

    /**
     * This is like "useEffect" hook return
     */
    return ()=>{
        clearInterval(interval);
        console.log('Return function. Done!');
    }
}

/**
 * "$" sign is a RxJS convention that it stores an Observable
 */
new Observable(subscribe).subscribe(some=>console.log(some));

/**
 * or the same.
 * !!!!create() function is deprecated
 */
// Observable.create(subscribe).subscribe(some=>console.log(some));

