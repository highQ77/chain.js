import { CLabel } from "./CLabel.js";

export class CLinkLabel extends CLabel {
    static html = `
        <span>[slot]</span>
    `
    constructor() {
        super(CLinkLabel.html)
        this.h5.style.cursor = 'pointer'
    }

    /** set view by id */
    setViewById(id = '', view = () => { }) {
        this.on('click', () => {
            document.getElementById(id).class.setChildren([view()])
        })
        return this
    }
}