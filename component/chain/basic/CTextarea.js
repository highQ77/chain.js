import { CInputBase } from "./CInputBase.js";

export class CTextarea extends CInputBase {
    static html = `
        <textarea class="form-control"></textarea>
    `
    constructor() {
        super(CTextarea.html)
    }

    /** content */
    setContent(val) {
        val = val.split('\n').filter(row => row.trim() != '')
        let firstChar = val[0].trim()[0]
        let index = val[0].indexOf(firstChar)
        val = val.map(v => v.slice(index))
        let rows = val.length
        this.h5.value = val.join('\n')
        this.h5.rows = rows
        this.h5.wrap = 'off'
        return this
    }

    /** set text color */
    setTextColor(color = 'gray') {
        this.h5.style.color = color
        return this
    }

    /** font size */
    setFontSize(size = 14) {
        this.h5.style.fontSize = `${size}px`
        return this
    }

}