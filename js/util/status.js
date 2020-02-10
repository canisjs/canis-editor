class Status {
    constructor(consoleContainerId, editor) {
        this._info = { type: 'log', msg: '', errSpec: '' };
        this.consoleContainerId = consoleContainerId;
        this.editor = editor;
        this.charCheckMap = new Map();
        this.specWithoutSpace = '';
    }
    set info(info) {
        if (typeof info === 'string') {
            info = { type: 'log', msg: info, errSpec: '' };
        }
        this._info = info;
        if (this.consoleContainerId !== '' && document.getElementById(this.consoleContainerId)) {
            if (this._info.type === 'clear') {
                document.getElementById(this.consoleContainerId).innerHTML = '';
            }
            let tmpP = document.createElement('p');
            let msgStr = '';
            let errLink = document.createElement('a');

            switch (this._info.type) {
                case 'error':
                    //get the line and col number of the error in the editor
                    let startPosi = [0, 0], endPosi = [0, 0];
                    console.log('comming errro: ', this._info.errSpec, this.specWithoutSpace, this.specWithoutSpace.indexOf(this._info.errSpec));
                    if (this.specWithoutSpace.indexOf(this._info.errSpec) >= 0) {
                        const startIdx = this.specWithoutSpace.indexOf(this._info.errSpec);
                        const endIdx = startIdx + this._info.errSpec.length - 1;
                        startPosi = this.charCheckMap.get(startIdx);
                        endPosi = this.charCheckMap.get(endIdx);
                        console.log('erro spec: ', this._info.errSpec, this._info.errSpec.length, startPosi, endPosi);
                        this.editor.setSelection(new monaco.Selection(startPosi[0], startPosi[1], endPosi[0], endPosi[1] + 1));
                        this.editor.focus();
                    }
                    msgStr = '[<span class="error-msg">ERROR</span>]: ' + this._info.msg + ' ';
                    errLink.className = 'error-link';
                    errLink.innerHTML = 'at line ' + (startPosi[0] === endPosi[0] ? startPosi[0] : (startPosi[0] + ' to line ' + endPosi[0]));
                    errLink.onclick = () => {
                        this.editor.setSelection(new monaco.Selection(startPosi[0], startPosi[1], endPosi[0], endPosi[1] + 1));
                        this.editor.focus();
                    }
                    break;
                default:
                    msgStr = '[<span class="log-msg">LOG</span>]: ' + this._info.msg;
                    break;
            }
            tmpP.innerHTML = msgStr;
            tmpP.appendChild(errLink);
            document.getElementById(this.consoleContainerId).appendChild(tmpP);
        }

    }

    get info() {
        return this._info;
    }
}

// let status = new Status();