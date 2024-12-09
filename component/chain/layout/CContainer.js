import { CLayout } from "./CLayout.js";

/** all layouts are based on CLayout */
export class CContainer extends CLayout {
    static html = `
        <div class="container">
            <div class="row">
                [slot]
            </div>
        </div>
    `

    /** constructor */
    constructor() {
        super(CContainer.html)
        this.slot = this.h5.getElementsByClassName('row')[0]
    }

    /** full width */
    setFluid() {
        this.h5.classList.remove('container')
        this.h5.classList.add('container-fluid')
        return this
    }

}