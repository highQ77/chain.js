import { CInputBase } from "./CInputBase.js";

export class CSelect extends CInputBase {
    static html = `
        <div class="position-relative" style="height:{height}px;width:{width}px;border:1px solid lightgray;border-radius: 16px;" class="rounded-circle">
            <div class="position-absolute btn" style="
                    left:0;
                    top:0;
                    display:flex;
                    height:{height}px;
                    width:{width}px;
                    justify-content:center;
                    align-items:center;
                    padding-left:0px;
                ">
                select now
            </div>
                <div class="position-absolute btn" style="
                    display:flex;
                    height:{height}px;
                    width:{width}px;
                    justify-content:end;
                    align-items:center;
                    padding-right:7px;
                    background: transparent;
                ">  
                ▼
            </div>
            <select class="position-absolute" style="
                cursor:pointer; 
                top:5px;
                height:{height}px; 
                width:{width}px;
                opacity: 0;
            ">[slot]</select>
        </div>
    `
    /** constructor */
    constructor() {
        super(CSelect.html.replace(new RegExp("{width}", 'ig'), 180).replace(new RegExp("{height}", 'ig'), 31))
        this.slot = this.input = this.h5.getElementsByTagName('select')[0]
        let select = this.input
        let div = this.h5.getElementsByTagName('div')[0]
        select.onchange = () => {
            div.innerHTML = this.display[select.value]
        }
    }

    destroy() {
        this.slot.onchange = null
        this.display.length = 0
        this.display = null
        super.destroy()
    }

    /** pass option data */
    setNameWithMap(name, values = [], display = []) {
        this.display = display
        let html = ''
        for (let i = 0; i < values.length; i++)
            html += `<option value="${values[i]}">${display[i]}</option>`
        let div = this.h5.getElementsByTagName('div')[0]
        let select = this.input
        select.name = name
        select.innerHTML = html
        div.innerHTML = this.display[select.value]
        return this
    }
}