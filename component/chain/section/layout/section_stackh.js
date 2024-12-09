import { CButton } from "../../basic/CButton.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackH } from "../../layout/CStackH.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_stackh() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CStackH examples').setFontSize(18).setBold(),
        (new CLabel).setText('讓元件可以水平排列'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackH).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CLabel).setText('Logo'),
                (new CButton).setLabel('Home').setClasses(['ms-auto']),
                (new CButton).setLabel('Design'),
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackH).setGap(2).setChildren([
                    (new CLabel).setText('Logo'),
                    (new CButton).setLabel('Home').setClasses(['ms-auto']),
                    (new CButton).setLabel('Design'),
                ])
            `),
        ]),
    ])
}