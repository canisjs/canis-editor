class Status {
    constructor() {
        this._info = { type: 'log', msg: '' };
        this.consoleContainerId = '';
    }
    set info(info) {
        if (typeof info === 'string') {
            info = { type: 'log', msg: info };
        }
        this._info = info;
        if (this.consoleContainerId !== '' && document.getElementById(this.consoleContainerId)) {
            if(info.type === 'clear'){
                document.getElementById(this.consoleContainerId).innerHTML = '';
            }
            let tmpP = document.createElement('p');
            let msgStr = '[<span class="' + (info.type === 'error' ? 'error-msg' : 'log-msg') + '">' + (info.type === 'error' ? 'ERROR' : 'LOG') + '</span>]: ' + info.msg;
            tmpP.innerHTML = msgStr;
            document.getElementById(this.consoleContainerId).appendChild(tmpP);
        }

    }

    get info() {
        return this._info;
    }
}

let status = new Status();