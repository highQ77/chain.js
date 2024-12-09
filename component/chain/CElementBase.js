/**
 * all components base class
 */
export class CElementBase {

    /** root name */
    root = 'app'

    /** html instance */
    h5

    /** parent instance */
    parent

    /** slot instance */
    slot

    /** column count */
    colCount = 0

    /** event array */
    eventList = []

    /** constructor */
    constructor(html) {
        let id = Date.now() + '_' + Math.random()
        let dummy = document.createElement('div')
        dummy.innerHTML = html
        dummy.children[0].setAttribute('id', id)
        dummy.outerHTML = dummy.innerHTML
        let app = document.getElementById(this.root)
        app.append(dummy.children[0])
        this.h5 = document.getElementById(id)
        this.h5.id = id
        this.h5.class = this
        this.slot = this.h5
        dummy.remove()
    }

    /** release memory phase */
    destroy() {
        // destroy all children
        this.removeChildren()
        // remove event
        this.eventList.forEach(e => this.slot.removeEventListener(e.eventName, e.execFun))
        this.eventList.length = 0
        delete this.eventList
        // slot 
        this.slot = null
        // remove self
        this.h5.remove()
        delete this.h5.class
        delete this.h5
    }

    /** set html instance id */
    setId(id) {
        this.h5.id = id
        return this
    }

    /** get html instance id */
    getId() {
        return this.h5.id
    }

    /** get child by id*/
    getChildById(id) {
        return document.getElementById(id).class
    }

    /** remove children */
    removeChildren() {
        // destroy all children
        [...this.slot.children].forEach(ch => {
            if (ch.class) { ch.parent = null; ch.class.destroy() }
            else ch.remove()
        })
        this.slot.innerHTML = ''
        return this
    }

    /** set children */
    setChildren(childrenList = []) {
        this.removeChildren()
        childrenList.forEach(ch => {
            ch.parent = this
            if (ch.colCount) {
                let col = `col-${ch.colCount}`
                ch.h5.classList.add(col)
            }
            this.slot.append(ch.h5)
        });
        return this
    }

    /** more classes to add */
    setClasses(classNameList) {
        classNameList.forEach(n => this.h5.classList.add(n))
        return this
    }

    /** set background color */
    setBackground(color = 'gray') {
        this.h5.style.background = color;
        return this
    }

    /** set column count */
    setColCount(count = 1) {
        this.colCount = count
        return this
    }

    /** set column count by breakpoints */
    setColCountByBP(bp = 'md', count = 1) {
        let col = `col-${bp}-${count}`
        this.h5.classList.add(col)
        return this
    }

    /** set left */
    setLeft(pos) {
        this.h5.style.left = `${pos}px`
        return this
    }

    /** set top */
    setTop(pos) {
        this.h5.style.top = `${pos}px`
        return this
    }

    /** set right */
    setRight(pos) {
        this.h5.style.right = `${pos}px`
        return this
    }

    /** set bottom */
    setBottom(pos) {
        this.h5.style.bottom = `${pos}px`
        return this
    }

    /** set width */
    setWidth(w) {
        this.h5.style.width = `${w}px`
        return this
    }

    /** set height */
    setHeight(h) {
        this.h5.style.height = `${h}px`
        return this
    }

    /** event - remove event by calling destroy function */
    on(eventName, execFun) {
        this.slot.addEventListener(eventName, execFun)
        this.eventList.push({ eventName, execFun })
        return this
    }

}