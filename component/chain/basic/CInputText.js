import { CInputBase } from "./CInputBase.js";

export class CInputText extends CInputBase {
    static html = `
        <input type="text" class="form-control" placeholder="enter your name">
    `
    constructor() {
        super(CInputText.html)
    }

    /** content */
    setContent(val) {
        this.h5.value = val
        return this
    }

}