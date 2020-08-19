import moment from 'moment';

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

timer();
