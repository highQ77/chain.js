import "../bootstrap/js/bootstrap.js"
import { CStackH } from "../component/chain/layout/CStackH.js";
import { CStackV } from "../component/chain/layout/CStackV.js";
import { CContainer } from "../component/chain/layout/CContainer.js";
import { CLabel } from "../component/chain/basic/CLabel.js";
import { CButton } from "../component/chain/basic/CButton.js";
import { section_home } from "../component/chain/section/section_home.js";
import { section_index_menu } from "../component/chain/section/section_index_menu.js";
import { CEmpty } from "../component/chain/layout/CEmpty.js";


export default function index() {
    return (new CStackV).setChildren([
        (new CStackV).setClasses(['position-sticky']).setTop(0).setChildren([
            (new CStackH).setGap(2).setClasses(['p-2', 'shadow', 'd-none', 'd-sm-flex']).setBackground(`rgba(113,44,249)`).setChildren([
                (new CLabel).setText('Chain.js').setFontSize(18).setTextColor('white').setBold(),
                (new CLabel).setText('鏈式網頁建構').setTextColor('white'),
                (new CLabel).setText('x Bootstrap5').setFontSize(18).setTextColor('white').setBold(),
                (new CButton).setLabel('Home').setTextColor('white').setClasses(['ms-auto']).setBackground(`rgba(113,44,249)`).setViewById('content', section_home),
                (new CButton).setLabel('Github').setTextColor('white').setBackground(`rgba(113,44,249)`).on('click', () => {
                    window.open('https://github.com/highQ77/chain.js', '_blank')
                }),
            ]),
            (new CStackH).setGap(2).setClasses(['p-2', 'shadow', 'd-flex', 'd-sm-none']).setBackground(`rgba(113,44,249)`).setChildren([
                (new CEmpty),
                (new CLabel).setText('Chain.js').setFontSize(18).setTextColor('white').setBold(),
                (new CButton).setLabel('Home').setTextColor('white').setClasses(['ms-auto']).setBackground(`rgba(113,44,249)`).setViewById('content', section_home),
                (new CButton).setId('menuBtn')
                    .setLabel('menu').setTextColor('white')
                    .setClasses(['ms-auto']).setBackground(`rgba(113,44,249)`)
                    .on('click', e => document.getElementById('menu').class.setChildren([section_index_menu()])),
                (new CStackV).setId('menu').setClasses(['position-fixed'])
                    .setBackground('rgba(113,44,249,.96)').setLeft(0).setTop(0)
                    .setTextColor('white').on('click', e => document.getElementById('menu').class.setChildren([]))
            ]),
            (new CStackH).setClasses(['p-1', 'shadow-lg']).setBackground(`rgb(164, 119, 255)`),
        ]),
        (new CStackV).setClasses(['position-fixed', 'd-none', 'd-sm-flex']).setTop(52).setChildren([
            section_index_menu()
        ]),
        (new CContainer).setClasses(['p-5']).setChildren([
            (new CStackV).setColCount(0).setColCountByBP('sm', 3),
            (new CStackV).setId('content').setColCount(12).setColCountByBP('sm', 9).setChildren([
                // section_inputfile()
                section_home()
            ]),
        ]),
    ])
}