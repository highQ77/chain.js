import { CElementBase } from "../CElementBase.js";

export class CLabel extends CElementBase {
    static html = `
        <span>[slot]</span>
    `
    constructor(html) {
        super(html || CLabel.html)
        this.setFontSize()
    }

    /** label */
    setText(html) {
        this.h5.innerHTML = html
        return this
    }

    /** bold */
    setBold() {
        this.h5.style.fontWeight = 'bold'
        return this
    }

    /** horizontal - start / center / end */
    setTextAlign(pos = 'start') {
        this.h5.style.textAlign = pos
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