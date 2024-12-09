import { CElementBase } from "../CElementBase.js";

export class CImage extends CElementBase {
    static html = `
        <img/>
    `
    /** constructor */
    constructor() {
        super(CImage.html)
    }

    /** set image source */
    setSource(src) {
        this.h5.src = src
        return this
    }

    /** set fluid - responsive image */
    setFluid() {
        this.setClasses(['img-fluid'])
        return this
    }

    /** set thumbnails - a rounded 1px border image */
    setThumbnail() {
        this.setClasses(['img-thumbnail'])
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