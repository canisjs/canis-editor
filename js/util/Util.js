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

    static checkAutoComplete(textUntilPosition) {
        console.log('checking auto complete');
        let match = false, autocompleteType;
        const matchChartItem = textUntilPosition.match(/"charts"\s*:\s*\[\s*\{\s*("[^"]*"\s*:\s*"[^"]*"\s*[\s\S]\s*)*([^"]*)?$/);
        if (matchChartItem) {
            match = matchChartItem;
            autocompleteType = this.AUTOCOMPLETE_CHART_ITEM;
        }

        const matchAniItem = textUntilPosition.match(/"animations"\s*:\s*\[\s*\{\s*("[^"]*"\s*:\s*((\{[^\}]+\})|("[^"]*")|(\[[^\]]+\]))[\s\S]\s*)*([^"\{\[]*)?$/);
        if (matchAniItem) {
            match = matchAniItem;
            autocompleteType = this.AUTOCOMPLETE_ANIMATION_ITEM;
        }

        const matchGroupingItem = textUntilPosition.match(/"grouping"\s*:\s*\{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*([^"]*)?$/);
        if (matchGroupingItem) {
            match = matchGroupingItem;
            autocompleteType = this.AUTOCOMPLETE_GROUPING_ITEM;
        }

        const matchOffsetItem = textUntilPosition.match(/"offset"\s*:\s*\{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*([^"]*)?$/);
        if (matchOffsetItem) {
            match = matchOffsetItem;
            autocompleteType = this.AUTOCOMPLETE_OFFSET_ITEM;
        }

        const matchDurationItem = textUntilPosition.match(/"duration"\s*:\s*\{\s*("[^"]*"\s*:\s*"[^"]*"\s*,\s*)*([^"]*)?$/);
        if (matchDurationItem) {
            match = matchDurationItem;
            autocompleteType = this.AUTOCOMPLETE_DURATION_ITEM;
        }

        const matchActionItem = textUntilPosition.match(/"effects"\s*:\s*\[\s*\{\s*("[^"]*"\s*:\s*(("[^"]*")|([1-9]\d*))\s*[\s\S]\s*)*([^"]*)?$/);
        if (matchActionItem) {
            match = matchActionItem;
            autocompleteType = this.AUTOCOMPLETE_ACTION_ITEM;
        }

        const matchSortItem = textUntilPosition.match(/"sort"\s*:\s*\{\s*("[^"]*"\s*:\s*"[^"]*"\s*[\s\S]\s*)*([^"]*)?$/);
        if (matchSortItem) {
            match = matchSortItem;
            autocompleteType = this.AUTOCOMPLETE_SORT_ITEM;
        }

        /***   match values   ***/
        const matchRefValue = textUntilPosition.match(/"reference"\s*:\s*"?[^"]*"?$/);
        if (!matchChartItem && !matchAniItem && !matchGroupingItem && !matchOffsetItem && !matchDurationItem && !matchActionItem && !matchSortItem && matchRefValue) {
            if (matchRefValue[0].length + matchRefValue.index === textUntilPosition.length) {
                match = matchRefValue;
                autocompleteType = this.AUTOCOMPLETE_REFERENCE;
            }
        }

        const matchOrderValue = textUntilPosition.match(/"order"\s*:\s*"?[^"]*"?$/);
        if (!matchChartItem && !matchAniItem && !matchGroupingItem && !matchOffsetItem && !matchDurationItem && !matchActionItem && !matchSortItem && matchOrderValue) {
            if (matchOrderValue[0].length + matchOrderValue.index === textUntilPosition.length) {
                match = matchOrderValue;
                autocompleteType = this.AUTOCOMPLETE_ORDER;
            }
        }

        const matchEasingValue = textUntilPosition.match(/"easing"\s*:\s*"?[^"]*"?$/);
        if (!matchChartItem && !matchAniItem && !matchGroupingItem && !matchOffsetItem && !matchDurationItem && !matchActionItem && !matchSortItem && matchEasingValue) {
            if (matchEasingValue[0].length + matchEasingValue.index === textUntilPosition.length) {
                match = matchEasingValue;
                autocompleteType = this.AUTOCOMPLETE_EASING;
            }
        }

        const matchActionType = textUntilPosition.match(/"type0."\s*:\s*"?[^"]*"?$/);
        if (!matchChartItem && !matchAniItem && !matchGroupingItem && !matchOffsetItem && !matchDurationItem && !matchActionItem && !matchSortItem && matchActionType) {
            if (matchActionType[0].length + matchActionType.index === textUntilPosition.length) {
                match = matchActionType;
                autocompleteType = this.AUTOCOMPLETE_ACTION_TYPE;
            }
        }
        console.log('type: ', autocompleteType);
        return { 'match': match, 'autocompleteType': autocompleteType };
    }

    static autoComplete(range, type) {
        switch (type) {
            case this.AUTOCOMPLETE_CHART_ITEM:
                return this.autoCompleteChartItem(range);
            case this.AUTOCOMPLETE_ANIMATION_ITEM:
                return this.autoCompleteAnimationItem(range);
            case this.AUTOCOMPLETE_GROUPING_ITEM:
                return this.autoCompleteGroupingItem(range);
            case this.AUTOCOMPLETE_ACTION_ITEM:
                return this.autocompleteActionItem(range);
            case this.AUTOCOMPLETE_SORT_ITEM:
                return this.autoCompleteSortItem(range);
            case this.AUTOCOMPLETE_REFERENCE:
                return this.autoCompleteRef(range);
            case this.AUTOCOMPLETE_ORDER:
                return this.autoCompleteOrder(range);
            case this.AUTOCOMPLETE_EASING:
                return this.autoCompleteEasing(range);
            case this.AUTOCOMPLETE_OFFSET_ITEM:
                return this.autoCompleteOffset(range);
            case this.AUTOCOMPLETE_DURATION_ITEM:
                return this.autoCompleteDuration(range);
            case this.AUTOCOMPLETE_ACTION_TYPE:
                return this.autocompleteActionType(range);
        }
    }

    static autocompleteActionType(range) {
        return [
            {
                label: '"appear"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"appear"',
                range: range
            },
            {
                label: '"fade"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"fade"',
                range: range
            },
            {
                label: '"wipe bottom"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"wipe bottom"',
                range: range
            },
            {
                label: '"wipe top"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"wipe top"',
                range: range
            },
            {
                label: '"wipe left"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"wipe left"',
                range: range
            },
            {
                label: '"wipe right"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"wipe right"',
                range: range
            },
            {
                label: '"wheel"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"wheel"',
                range: range
            },
            {
                label: '"circle"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"circle"',
                range: range
            },
            {
                label: '"grow"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"grow"',
                range: range
            }
        ]
    }

    static autoCompleteOffset(range) {
        return [
            {
                label: '"field"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "set offset time according to the data attribute.",
                insertText: '"field": ""',
                range: range
            },
            {
                label: '"minOffset"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "offset time of the mark with the minimal value.",
                insertText: '"minOffset": ',
                range: range
            }
        ]
    }

    static autoCompleteDuration(range) {
        return [
            {
                label: '"field"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "set duration according to the data attribute.",
                insertText: '"field": ""',
                range: range
            },
            {
                label: '"minDuration"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "duration of the mark with the minimal value.",
                insertText: '"minDuration": ',
                range: range
            }
        ]
    }

    static autoCompleteEasing(range) {
        return [
            {
                label: '"easeLinear"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"easeLinear"',
                range: range
            },
            {
                label: '"easeInQuad"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"easeInQuad"',
                range: range
            },
            {
                label: '"easeOutQuad"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"easeOutQuad"',
                range: range
            },
            {
                label: '"easeInOutQuad"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"easeInOutQuad"',
                range: range
            },
            {
                label: '"easeInCubic"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"easeInCubic"',
                range: range
            },
            {
                label: '"easeOutCubic"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"easeOutCubic"',
                range: range
            },
            {
                label: '"easeInOutCubic"',
                kind: monaco.languages.CompletionItemKind.Function,
                insertText: '"easeInOutCubic"',
                range: range
            }
        ]
    }

    static autoCompleteOrder(range) {
        return [
            {
                label: '"ascending"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "animate in ascending order.",
                insertText: '"ascending"',
                range: range
            },
            {
                label: '"descending"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "animate in descending order.",
                insertText: '"descending"',
                range: range
            }
        ]
    }

    static autoCompleteRef(range) {
        return [
            {
                label: '"start with previous"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "start with the previous unit.",
                insertText: '"start with previous",',
                range: range
            },
            {
                label: '"start after previous"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "start after the previous unit.",
                insertText: '"start after previous",',
                range: range
            }
        ]
    }

    static autoCompleteSortItem(range) {
        return [
            {
                label: '"field"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "animation order according to this data field.",
                insertText: '"field": ""',
                range: range
            },
            {
                label: '"order"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "animation order, One of: 1) ascending, 2) descending, or 3) an array of the values of this attribute.",
                insertText: '"order": ',
                range: range
            }
        ]
    }

    static autocompleteActionItem(range) {
        return [
            {
                label: '"type"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "type of animation effect.",
                insertText: '"type": ""',
                range: range
            },
            {
                label: '"offset"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "The offset time before this action. One of: 1) number indicates time in ms or 2) offset object.",
                insertText: '"offset": ',
                range: range
            },
            {
                label: '"duration"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "The duration time of this action. One of: 1) number indicates time in ms or 2) duration object.",
                insertText: '"duration": ',
                range: range
            },
            {
                label: '"easing"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Specify the easing function.",
                insertText: '"easing": ',
                range: range
            },
            {
                label: '"reference"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "specify the aniamtion order of the resulted groups, One of: 1) start with previous, 2) start after previous.",
                insertText: '"reference": ',
                range: range
            },
        ]
    }

    static autoCompleteGroupingItem(range) {
        return [
            {
                label: '"groupBy"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "categorical data attributes or id.",
                insertText: '"groupBy": ""',
                range: range
            },
            {
                label: '"reference"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "specify the aniamtion order of the resulted groups, One of: 1) start with previous, 2) start after previous",
                insertText: '"reference": ',
                range: range
            },
            {
                label: '"delay"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "time delays between groups.",
                insertText: '"delay": ',
                range: range
            },
            {
                label: '"sort"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "animation order of the resulted groups.",
                insertText: '"sort": {\n\t"field": ""\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range
            },
            {
                label: '"grouping"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "grouping of the resulted groups.",
                insertText: '"grouping": {\n\t"groupBy": "id"\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range
            },
        ]
    }

    static autoCompleteAnimationItem(range) {
        return [
            {
                label: '"offset"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "The offset time before this action. One of: 1) number indicates time in ms or 2) offset object.",
                insertText: '"offset": ',
                range: range
            },
            {
                label: '"reference"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "Specify the order of this action. One of start with previous or start after previous.",
                insertText: '"reference": ',
                range: range
            },
            {
                label: '"selector"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "mark selector following W3C rules of CSS selector.",
                insertText: '"selector": ""',
                range: range
            },
            {
                label: '"grouping"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "partitioner to partition the selected marks.",
                insertText: '"grouping": {\n\t"groupBy": "id"\n}',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range
            },
            {
                label: '"effects"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "animation effects for the selected marks.",
                insertText: '"effects": [\n\t{\n\t\t"type": "fade"\n\t}\n]',
                insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
                range: range
            }
        ];
    }

    static autoCompleteChartItem(range) {
        return [
            {
                label: '"id"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "id of the chart, need this to do facet.",
                insertText: '"id": ""',
                range: range
            },
            {
                label: '"source"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "url of the dsvg, can be a specific file (aa/bb.dsvg) or a file name template (aa/bb).",
                insertText: '"source": ""',
                range: range
            },
            {
                label: '"start"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "start index of the file, when there are multiple indexed files.",
                insertText: '"start": ""',
                range: range
            },
            {
                label: '"end"',
                kind: monaco.languages.CompletionItemKind.Function,
                documentation: "end index of the file, when there are multiple indexed files.",
                insertText: '"end": ""',
                range: range
            }
        ];
    }
}

Util.AUTOCOMPLETE_CHART_ITEM = Symbol('autocomplete_chart_item');
Util.AUTOCOMPLETE_ANIMATION_ITEM = Symbol('autocomplete_animation_item');
Util.AUTOCOMPLETE_GROUPING_ITEM = Symbol('autocomplete_grouping_item');
Util.AUTOCOMPLETE_ACTION_ITEM = Symbol('autocomplete_action_item');
Util.AUTOCOMPLETE_SORT_ITEM = Symbol('autocomplete_sort_item');
Util.AUTOCOMPLETE_REFERENCE = Symbol('autocomplete_reference');
Util.AUTOCOMPLETE_ORDER = Symbol('autocomplete_order');
Util.AUTOCOMPLETE_EASING = Symbol('autocomplete_easing');
Util.AUTOCOMPLETE_OFFSET_ITEM = Symbol('autocomplete_offset_item');
Util.AUTOCOMPLETE_DURATION_ITEM = Symbol('autocomplete_duration_item');
Util.AUTOCOMPLETE_ACTION_TYPE = Symbol('autocomplete_action_type');