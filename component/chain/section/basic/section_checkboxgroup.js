import { CButton } from "../../basic/CButton.js";
import { CCheckboxGroup } from "../../basic/CCheckboxGroup.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_checkboxgroup() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CCheckboxGroup examples').setFontSize(18).setBold(),
        (new CLabel).setText('檢核框群組範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CCheckboxGroup).setNameWithMap('cbgroup', [0, 1, 2], ['run', 'swim', 'dance']),
                (new CButton).setLabel('check selection').on('click', () => {
                    let cbs = [];
                    [...document.getElementsByName('cbgroup')].forEach(cb => {
                        cb.checked && cbs.push(cb.value)
                    })
                    alert('your selection: ' + cbs.join(','))
                })
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                    (new CCheckboxGroup).setNameWithMap('cbgroup', [0, 1, 2], ['run', 'swim', 'dance']),
                    (new CButton).setLabel('check selection').on('click', () => {
                        let cbs = [];
                        [...document.getElementsByName('cbgroup')].forEach(cb => {
                            cb.checked && cbs.push(cb.value)
                        })
                        alert('your selection: ' + cbs.join(','))
                    })
                ])
            `),
        ]),
    ])
}