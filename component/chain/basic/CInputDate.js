import { CInputBase } from "./CInputBase.js";

export class CInputDate extends CInputBase {
    static html = `
        <input type="date" class="form-control">
    `
    constructor() {
        super(CInputDate.html)
    }

}