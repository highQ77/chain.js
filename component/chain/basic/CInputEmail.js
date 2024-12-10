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

}