import { CElementBase } from "../CElementBase.js";

export class CDivImage extends CElementBase {
    static html = `
        <div></div>
    `
    /** constructor */
    constructor() {
        super(CDivImage.html)
    }

    /** set image source */
    setSource(src) {
        this.h5.style.backgroundImage = `url(${src})`
        return this
    }

    /** mode - auto / contain / cover / full */
    setMode(mode) {
        if (mode == 'full') mode = '100% 100%'
        this.h5.style.backgroundSize = mode
        this.h5.style.backgroundRepeat = 'no-repeat'
        return this
    }

    /** set view by id */
    setViewById(id = '', view = () => { }) {
        this.on('click', () => {
            document.getElementById(id).class.setChildren([view()])
        })
        return this
    }

}