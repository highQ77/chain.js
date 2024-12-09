import { CLayout } from "./CLayout.js";

/** all layouts are based on CLayout */
export class CEmpty extends CLayout {
    static html = `
        <div class="container p-2">
        </div>
    `

    /** constructor */
    constructor() {
        super(CEmpty.html)
    }

    /** full width */
    setFluid() {
        this.h5.classList.remove('container')
        this.h5.classList.add('container-fluid')
        return this
    }

}