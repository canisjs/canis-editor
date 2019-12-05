class Util {
    constructor() { }

    static formatTime(time) {
        let currentTimeS = parseInt(time / 1000);
        let currentTimeMS = parseInt(time % 1000 / 10);
        let currentTimeSStr = currentTimeS < 10 ? '0' + currentTimeS : '' + currentTimeS;
        let currentTimeMSStr = currentTimeMS < 10 ? '0' + currentTimeMS : '' + currentTimeMS;
        return currentTimeSStr + '.' + currentTimeMSStr;
    }
    static saveJSON(data, filename) {
        if (!data) {
            console.error('No data')
            return;
        }

        if (!filename) filename = 'spec.json'

        if (typeof data === "object") {
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], { type: 'text/json' }),
            e = document.createEvent('MouseEvents'),
            a = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl = ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
}
