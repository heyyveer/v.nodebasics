

function flattenArray(arr) {
    return arr.reduce((acc, val) => acc.concat(val), []);
}

function formatTime(secs) {
    const hours = Math.floor(secs / 3600);
    const minutes = Math.floor((secs % 3600) / 60);
    const seconds = secs % 60;

    return `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
}

module.exports = {
    flattenArray,
    formatTime
}
