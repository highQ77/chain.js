import { CInputDate } from "../../basic/CInputDate.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_inputdate() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CInputDate examples').setFontSize(18).setBold(),
        (new CLabel).setText('日期選擇器範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CInputDate)
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                    (new CInputFile)
                ])
            `),
        ]),
    ])
}