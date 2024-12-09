import { CInputBase } from "./CInputBase.js";

export class CInputPassword extends CInputBase {
    static html = `
        <input type="password" class="form-control" placeholder="enter your password">
    `
    constructor() {
        super(CInputPassword.html)
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