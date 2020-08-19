## Example-1 (next/error/complete)
![](images/1-next-error-complete.jpg)
## Example-2 (of)
![](images/2-of.jpg)
## Example-3 (from)
![](images/3-from.jpg)
## Example-4 (concat)
![](images/4-concat.jpg)
## Example-6 (ajax request)
![](images/6-ajax.jpg)
## Example-7 (own Observers)
![](images/7-ownObserver.jpg)
## Example-8 (multiple Observers)
![](images/8-multipleObservers.jpg)

## Example-9 (unsubscribe)
No image

## Example-10 (Add function + own interval implementation)
```javascript
const timerOne = timer$(1000).subscribe(
// some code
);

const timerTwo = timer$(1000).subscribe(
// some code
);

// !!! Result with this line commented
// timerOne.add(timerTwo) 
```
![](images/10-own-interval(commented).jpg)
```javascript
const timerOne = timer$(1000).subscribe(
// some code
);

const timerTwo = timer$(1000).subscribe(
// some code
);

timerOne.add(timerTwo)  // <---- with add function !!!!
```
![](images/10-own-interval(with%20add).jpg)
