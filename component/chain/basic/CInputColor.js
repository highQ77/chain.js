import { CInputBase } from "./CInputBase.js";

export class CInputColor extends CInputBase {
    static html = `
        <input type="color" class="form-control form-control-color" value="#563d7c" title="Choose your color">
    `
    constructor() {
        super(CInputColor.html)
    }

}