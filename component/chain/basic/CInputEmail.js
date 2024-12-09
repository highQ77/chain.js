import { CInputBase } from "./CInputBase.js";

export class CInputEmail extends CInputBase {
    static html = `
        <input type="email" class="form-control" placeholder="name@example.com">
    `
    constructor() {
        super(CInputEmail.html)
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