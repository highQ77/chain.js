import { CLayout } from "./CLayout.js";

export class CStackH extends CLayout {
    static html = `
        <div class="hstack">[slot]</div>
    `

    /** constructor */
    constructor() {
        super(CStackH.html)
        this.h5.innerHTML = ''
    }

    /** set gap */
    setGap(gap = 0) {
        this.h5.classList.add(`gap-${gap}`)
        return this
    }
}