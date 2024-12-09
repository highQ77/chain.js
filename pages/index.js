import { CStackH } from "../component/chain/layout/CStackH.js";
import { CStackV } from "../component/chain/layout/CStackV.js";
import { CContainer } from "../component/chain/layout/CContainer.js";
import { CEmpty } from "../component/chain/layout/CEmpty.js";
import { CLabel } from "../component/chain/basic/CLabel.js";
import { CButton } from "../component/chain/basic/CButton.js";
import { section_stackh } from "../component/chain/section/layout/section_stackh.js";
import { section_home } from "../component/chain/section/section_home.js";
import { section_stackv } from "../component/chain/section/layout/section_stackv.js";
import { section_container } from "../component/chain/section/layout/section_container.js";
import { section_empty } from "../component/chain/section/layout/section_empty.js";
import { section_label } from "../component/chain/section/basic/section_label.js";
import { section_button } from "../component/chain/section/basic/section_button.js";
import { CLinkLabel } from "../component/chain/basic/CLinkLabel.js";
import { section_image } from "../component/chain/section/basic/section_image.js";
import { section_linklabel } from "../component/chain/section/basic/section_linklabel.js";
import { section_divimage } from "../component/chain/section/basic/section_divimage.js";
import { section_select } from "../component/chain/section/basic/section_select.js";
import { section_inputtext } from "../component/chain/section/basic/section_inputtext.js";
import { section_inputpassword } from "../component/chain/section/basic/section_inputpassword.js";
import { section_inputemail } from "../component/chain/section/basic/section_inputemail.js";
import { section_form } from "../component/chain/section/basic/section_form.js";
import { section_textarea } from "../component/chain/section/basic/section_textarea.js";
import { section_checkboxgroup } from "../component/chain/section/basic/section_checkboxgroup.js";
import { section_radiogroup } from "../component/chain/section/basic/section_radiogroup.js";
import { section_inputfile } from "../component/chain/section/basic/section_inputfile.js";
import { section_inputdate } from "../component/chain/section/basic/section_inputdate.js";
import { section_inputtime } from "../component/chain/section/basic/section_inputtime.js";
import { section_inputcolor } from "../component/chain/section/basic/section_inputcolor.js";

export default function index() {
    return (new CStackV).setChildren([
        (new CStackV).setClasses(['position-sticky']).setTop(0).setChildren([
            (new CStackH).setGap(2).setClasses(['p-2', 'shadow']).setBackground(`rgba(113,44,249)`).setChildren([
                (new CLabel).setText('Chain.js').setFontSize(18).setTextColor('white').setBold(),
                (new CLabel).setText('鏈式網頁建構').setTextColor('white'),
                (new CLabel).setText('x Bootstrap5').setFontSize(18).setTextColor('white').setBold(),
                (new CLabel).setText('建構中 20241209').setTextColor('yellow'),
                (new CButton).setLabel('Home').setLabelColor('white').setClasses(['ms-auto']).setBackground(`rgba(113,44,249)`).setViewById('content', section_home),
                (new CButton).setLabel('Design').setLabelColor('white').setBackground(`rgba(113,44,249)`),
            ]),
            (new CStackH).setClasses(['p-1', 'shadow-lg']).setBackground(`rgb(164, 119, 255)`),
        ]),
        (new CStackV).setClasses(['position-fixed', 'p-5']).setTop(52).setChildren([
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
        ]),
        (new CContainer).setClasses(['p-5']).setChildren([
            (new CStackV).setColCount(3),
            (new CStackV).setId('content').setColCount(9).setChildren([
                // section_inputfile()
                section_home()
            ]),
        ]),
    ])
}