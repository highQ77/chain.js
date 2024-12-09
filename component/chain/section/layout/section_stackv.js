import { CButton } from "../../basic/CButton.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_stackv() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CStackV examples').setFontSize(18).setBold(),
        (new CLabel).setText('讓元件可以垂直排列'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CLabel).setText('Is it good to drink?'),
                (new CButton).setLabel('Yes'),
                (new CButton).setLabel('No'),
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                    (new CLabel).setText('Is it good to drink?'),
                    (new CButton).setLabel('Yes'),
                    (new CButton).setLabel('No'),
                ])
            `),
        ]),
    ])
}