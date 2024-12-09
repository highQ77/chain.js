import { CLayout } from "./CLayout.js";

export class CStackV extends CLayout {
    static html = `
        <div class="vstack">[slot]</div>
    `

    /** constructor */
    constructor() {
        super(CStackV.html)
        this.h5.innerHTML = ''
    }

    /** set gap. 1 ~ 5 */
    setGap(gap = 0) {
        this.h5.classList.add(`gap-${gap}`)
        return this
    }
}