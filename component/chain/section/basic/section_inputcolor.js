import { CInputColor } from "../../basic/CInputColor.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_inputcolor() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CInputColor examples').setFontSize(18).setBold(),
        (new CLabel).setText('顏色選擇器範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CInputColor)
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