import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackH } from "../../layout/CStackH.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_label() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CLabel examples').setFontSize(18).setBold(),
        (new CLabel).setText('多種文字呈現範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CLabel).setText('Bold').setBold(),
                (new CLabel).setText('FontSize-24').setFontSize(24),
                (new CLabel).setText('ColorLabel').setTextColor('rgba(113,44,249)'),
                (new CStackH).setChildren([
                    (new CLabel).setText('BackgroundColor').setBackground('rgba(113,44,249)').setTextColor('white').setClasses(['p-1']),
                ])
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                    (new CLabel).setText('Bold').setBold(),
                    (new CLabel).setText('FontSize-24').setFontSize(24),
                    (new CLabel).setText('ColorLabel').setTextColor('rgba(113,44,249)'),
                    (new CStackH).setChildren([
                        (new CLabel).setText('BackgroundColor').setBackground('rgba(113,44,249)').setTextColor('white').setClasses(['p-1']),
                    ])
                ])
            `),
        ]),
    ])
}