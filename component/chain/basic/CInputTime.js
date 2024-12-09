import { CInputBase } from "./CInputBase.js";

export class CInputTime extends CInputBase {
    static html = `
        <input type="time" class="form-control">
    `
    constructor() {
        super(CInputTime.html)
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