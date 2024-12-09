import { CInputBase } from "./CInputBase.js";

export class CInputFile extends CInputBase {
    static html = `
        <input type="file" class="form-control">
    `
    constructor() {
        super(CInputFile.html)
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