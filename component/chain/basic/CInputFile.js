import { CInputBase } from "./CInputBase.js";

export class CInputFile extends CInputBase {
    static html = `
        <input type="file" class="form-control">
    `
    constructor() {
        super(CInputFile.html)
    }

}