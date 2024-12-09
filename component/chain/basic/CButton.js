import { CElementBase } from "../CElementBase.js";

export class CButton extends CElementBase {
    static html = `
        <button type="button" class="btn btn-sm" style="
            min-width:80px;
            border: 1px solid lightgray;
            border-radius: 16px;
        ">[slot]</button>
    `
    /** constructor */
    constructor() {
        super(CButton.html)
        let btn = this.h5
        btn.style.transition = 'outline .3s'
        btn.onmouseenter = () => {
            btn.style.outline = '2px solid gray'
        }
        btn.onmouseleave = () => {
            btn.style.outline = '0px solid gray'
        }
    }

    /** release memory phase */
    destroy() {
        let btn = this.h5
        btn.onmouseenter = null
        btn.onmouseleave = null
        super.destroy()
    }

    /** button label text */
    setLabel(html) {
        const btn = this.h5
        btn.innerHTML = html
        return this
    }

    /** button label text */
    setLabelColor(color = '') {
        const btn = this.h5
        btn.style.color = color
        return this
    }

    /** button label font size */
    setFontSize(size = 14) {
        const btn = this.h5
        btn.style.fontSize = `${size}px`
        return this
    }

    /** set view by id */
    setViewById(id = '', view = () => { }) {
        this.on('click', () => {
            document.getElementById(id).class.setChildren([view()])
        })
        return this
    }

}