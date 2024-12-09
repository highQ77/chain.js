import { CInputBase } from "./CInputBase.js";

export class CRadioGroup extends CInputBase {
    static html = `
        <div class="hstack gap-4"></div>
    `
    /** constructor */
    constructor() {
        super(CRadioGroup.html)
    }

    /** release memory phase */
    destroy() {
        this.display.length = 0
        this.display = null
        super.destroy()
    }

    /** pass option data */
    setNameWithMap(name, values = [], display = []) {
        this.display = display
        let html = ''
        for (let i = 0; i < values.length; i++)
            html += `<div><input type="radio" name="${name}" value="${values[i]}"> ${display[i]}</div>`
        this.h5.innerHTML = html
        return this
    }
}