import { CElementBase } from "../CElementBase.js";

export class CForm extends CElementBase {
    static html = `
        <form>[slot]</form>
    `
    /** constructor */
    constructor() {
        super(CForm.html)
    }

    /** set form action */
    setAction(action) {
        this.h5.action = action
        return this
    }

    /** set form method. get / post */
    setMethod(method) {
        this.h5.method = method
        return this
    }
}