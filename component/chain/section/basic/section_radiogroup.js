import { CButton } from "../../basic/CButton.js";
import { CLabel } from "../../basic/CLabel.js";
import { CRadioGroup } from "../../basic/CRadioGroup.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_radiogroup() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CRadioGroup examples').setFontSize(18).setBold(),
        (new CLabel).setText('單選群組範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CRadioGroup).setNameWithMap('rbgroup', [0, 1, 2], ['run', 'swim', 'dance']),
                (new CButton).setLabel('check selection').on('click', () => {
                    let rbs = [];
                    [...document.getElementsByName('rbgroup')].forEach(rb => {
                        rb.checked && rbs.push(rb.value)
                    })
                    alert('your selection: ' + rbs.join(','))
                })
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                    (new CRadioGroup).setNameWithMap('rbgroup', [0, 1, 2], ['run', 'swim', 'dance']),
                    (new CButton).setLabel('check selection').on('click', () => {
                        let rbs = [];
                        [...document.getElementsByName('rbgroup')].forEach(rb => {
                            rb.checked && rbs.push(rb.value)
                        })
                        alert('your selection: ' + rbs.join(','))
                    })
                ])
            `),
        ]),
    ])
}