import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_empty() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CEmpty examples').setFontSize(18).setBold(),
        (new CLabel).setText('適合放在區塊留白'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setClasses(['border', 'p-3']).setChildren([
                (new CLabel).setText('Basic Control').setFontSize(16).setBold(),
                (new CEmpty),
                (new CLabel).setText('CLabel'),
                (new CLabel).setText('CButton'),
                (new CLabel).setText('CImage'),
                (new CLabel).setText('CSelect'),
                (new CLabel).setText('CInputText'),
                (new CLabel).setText('CInputMail'),
                (new CLabel).setText('CInputPassword'),
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackV).setClasses(['border', 'p-3']).setChildren([
                    (new CLabel).setText('Basic Control').setFontSize(16).setBold(),
                    (new CEmpty),
                    (new CLabel).setText('CLabel'),
                    (new CLabel).setText('CButton'),
                    (new CLabel).setText('CImage'),
                    (new CLabel).setText('CSelect'),
                    (new CLabel).setText('CInputText'),
                    (new CLabel).setText('CInputMail'),
                    (new CLabel).setText('CInputPassword'),
                ]),
            `),
        ]),
    ])
}