import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_textarea() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CTextarea examples').setFontSize(18).setBold(),
        (new CLabel).setText('多行輸入框範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CTextarea).setContent('多行輸入\n多行輸入\n多行輸入\n多行輸入\n')
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                    (new CTextarea).setContent('多行輸入\\n多行輸入\\n多行輸入\\n多行輸入\\n')
                ])
            `),
        ]),
    ])
}