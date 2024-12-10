import { CInputBase } from "./CInputBase.js";

export class CInputTime extends CInputBase {
    static html = `
        <input type="time" class="form-control">
    `
    constructor() {
        super(CInputTime.html)
    }

}