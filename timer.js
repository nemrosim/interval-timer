import moment from 'moment';
import { interval } from 'rxjs';

//emit value in sequence every 1 second
const source = interval(1000);

console.log(source);

export const timer = () => {
    let iteration = 0;
    let date = 819151255000;

    const interval = setInterval(() => {
        date += 1000;

        const res = moment(new Date(date));
        console.log(res.format('HH:mm:ss'))

        if (iteration === 7) {
            clearInterval(interval)
        } else {
            iteration++;
        }
    }, [1000])
}

// timer();
