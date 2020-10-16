function humanReadable(seconds) {
    seconds = Math.min(seconds, 359999);
    let hours = Math.floor(seconds / 3600);
    let minutes = Math.floor(seconds / 60);
    seconds = seconds % 60;
    minutes -= hours * 60;
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    debugger;

    return `${hours}:${minutes}:${seconds}`
}

humanReadable(4855);

module.exports = humanReadable;