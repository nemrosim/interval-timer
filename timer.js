const moment = require('moment');

function timer () {
    let second = 0;
    let date = 819151255000;

    const interval = setInterval(() => {
        date += 1000;

        const res = moment(new Date(date));
        console.log(res.format('HH:mm:ss'))

        if (second === 20) {
            clearInterval(interval)
        }
    }, [1000])
}

module.exports = timer
