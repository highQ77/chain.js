import { CElementBase } from "../CElementBase.js";

/** all layouts are based on CLayout */
export class CLayout extends CElementBase {
    static html = `
        <div>[slot]</div>
    `

    /** constructor */
    constructor(html) {
        super(html)
    }
}