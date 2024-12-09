import { CInputBase } from "./CInputBase.js";

export class CInputColor extends CInputBase {
    static html = `
        <input type="color" class="form-control form-control-color" value="#563d7c" title="Choose your color">
    `
    constructor() {
        super(CInputColor.html)
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