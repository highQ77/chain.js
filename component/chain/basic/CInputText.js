import { CInputBase } from "./CInputBase.js";

export class CInputText extends CInputBase {
    static html = `
        <input type="text" class="form-control" placeholder="enter your name">
    `
    constructor() {
        super(CInputText.html)
    }

    /** content */
    setContent(val) {
        this.h5.value = val
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