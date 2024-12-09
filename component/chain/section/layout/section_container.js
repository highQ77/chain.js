import { CButton } from "../../basic/CButton.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CContainer } from "../../layout/CContainer.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackH } from "../../layout/CStackH.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_container() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CContainer examples').setFontSize(18).setBold(),
        (new CLabel).setText('支援 RWD 的容器'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CContainer).setClasses(['border', 'p-3']).setChildren([
                (new CStackH).setColCount(3).setChildren([
                    (new CButton).setLabel('3/12').setClasses(['w-100']),
                ]),
                (new CStackH).setColCount(9).setChildren([
                    (new CButton).setLabel('9/12').setClasses(['w-100'])
                ]),
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CContainer).setClasses(['border', 'p-3']).setChildren([
                    (new CStackH).setColCount(3).setChildren([
                        (new CButton).setLabel('3/12').setClasses(['w-100']),
                    ]),
                    (new CStackH).setColCount(9).setChildren([
                        (new CButton).setLabel('9/12').setClasses(['w-100'])
                    ]),
                ])
            `),
        ]),
    ])
}