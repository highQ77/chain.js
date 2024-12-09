import { CElementBase } from "../CElementBase.js";

export class CInputBase extends CElementBase {

    constructor(html) {
        super(html)
    }

    /** set form item name */
    setName(name) {
        this.h5.name = name
        return this
    }
}