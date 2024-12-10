import { CEmpty } from "../layout/CEmpty.js";
import { CLinkLabel } from "../basic/CLinkLabel.js";
import { section_stackh } from "../section/layout/section_stackh.js";
import { section_stackv } from "../section/layout/section_stackv.js";
import { section_container } from "../section/layout/section_container.js";
import { section_empty } from "../section/layout/section_empty.js";
import { section_label } from "../section/basic/section_label.js";
import { section_button } from "../section/basic/section_button.js";
import { section_image } from "../section/basic/section_image.js";
import { section_linklabel } from "../section/basic/section_linklabel.js";
import { section_divimage } from "../section/basic/section_divimage.js";
import { section_select } from "../section/basic/section_select.js";
import { section_inputtext } from "../section/basic/section_inputtext.js";
import { section_inputpassword } from "../section/basic/section_inputpassword.js";
import { section_inputemail } from "../section/basic/section_inputemail.js";
import { section_form } from "../section/basic/section_form.js";
import { section_textarea } from "../section/basic/section_textarea.js";
import { section_checkboxgroup } from "../section/basic/section_checkboxgroup.js";
import { section_radiogroup } from "../section/basic/section_radiogroup.js";
import { section_inputfile } from "../section/basic/section_inputfile.js";
import { section_inputdate } from "../section/basic/section_inputdate.js";
import { section_inputtime } from "../section/basic/section_inputtime.js";
import { section_inputcolor } from "../section/basic/section_inputcolor.js";
import { CStackV } from "../layout/CStackV.js";

export function section_index_menu() {
    return (new CStackV).setClasses(['p-5']).setChildren([
        (new CLinkLabel).setText('Layout').setFontSize(16).setBold(),
        (new CLinkLabel).setText('CStackV').setViewById('content', section_stackv),
        (new CLinkLabel).setText('CStackH').setViewById('content', section_stackh),
        (new CLinkLabel).setText('CContainer').setViewById('content', section_container),
        (new CLinkLabel).setText('CEmpty').setViewById('content', section_empty),
        (new CEmpty),
        (new CLinkLabel).setText('Basic Control').setFontSize(16).setBold(),
        (new CLinkLabel).setText('CForm').setViewById('content', section_form),
        (new CLinkLabel).setText('CLabel').setViewById('content', section_label),
        (new CLinkLabel).setText('CLinkLabel').setViewById('content', section_linklabel),
        (new CLinkLabel).setText('CButton').setViewById('content', section_button),
        (new CLinkLabel).setText('CImage').setViewById('content', section_image),
        (new CLinkLabel).setText('CDivImage').setViewById('content', section_divimage),
        (new CLinkLabel).setText('CSelect').setViewById('content', section_select),
        (new CLinkLabel).setText('CInputText').setViewById('content', section_inputtext),
        (new CLinkLabel).setText('CInputEmail').setViewById('content', section_inputemail),
        (new CLinkLabel).setText('CInputPassword').setViewById('content', section_inputpassword),
        (new CLinkLabel).setText('CTextarea').setViewById('content', section_textarea),
        (new CLinkLabel).setText('CCheckboxGroup').setViewById('content', section_checkboxgroup),
        (new CLinkLabel).setText('CRadioGroup').setViewById('content', section_radiogroup),
        (new CLinkLabel).setText('CInputFile').setViewById('content', section_inputfile),
        (new CLinkLabel).setText('CInputDate').setViewById('content', section_inputdate),
        (new CLinkLabel).setText('CInputTime').setViewById('content', section_inputtime),
        (new CLinkLabel).setText('CInputColor').setViewById('content', section_inputcolor),
        (new CEmpty),
        (new CLinkLabel).setText('Components').setFontSize(16).setBold(),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
        (new CLinkLabel).setText('Accordion'),
    ])
}