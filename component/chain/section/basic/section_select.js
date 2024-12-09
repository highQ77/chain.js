import { CButton } from "../../basic/CButton.js";
import { CLabel } from "../../basic/CLabel.js";
import { CSelect } from "../../basic/CSelect.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackH } from "../../layout/CStackH.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_select() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CSelect examples').setFontSize(18).setBold(),
        (new CLabel).setText('下拉式選單範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackH).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CSelect).setNameWithMap('sport', [0, 1, 2], ['run', 'swim', 'dance']),
                (new CButton).setLabel('check select value').on('click', e => {
                    alert(document.getElementsByName('sport')[0].value)
                })
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackH).setGap(2).setClasses(['border', 'p-3']).setChildren([
                    (new CSelect).setNameWithMap('sport', [0, 1, 2], ['run', 'swim', 'dance']),
                    (new CButton).setLabel('check select value').on('click', e => {
                        alert(document.getElementsByName('sport')[0].value)
                    })
                ])
            `),
        ]),
    ])
}