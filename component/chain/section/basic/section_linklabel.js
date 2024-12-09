import { CLabel } from "../../basic/CLabel.js";
import { CLinkLabel } from "../../basic/CLinkLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackH } from "../../layout/CStackH.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_linklabel() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CLinkLabel examples').setFontSize(18).setBold(),
        (new CLabel).setText('文字連結範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CLinkLabel).setText('link1').setViewById('link_sample', () => (new CLabel).setText('文字連結範例1').setTextColor('red')),
                (new CLinkLabel).setText('link2').setViewById('link_sample', () => (new CLabel).setText('文字連結範例2').setTextColor('green')),
                (new CLinkLabel).setText('link3').setViewById('link_sample', () => (new CLabel).setText('文字連結範例3').setTextColor('blue')),
                (new CStackH).setId('link_sample').setChildren([
                    (new CLabel).setText('replace content here').setBackground('#EEE'),
                ])
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackV).setGap(2).setClasses(['border', 'p-3']).setChildren([
                    (new CLinkLabel).setText('link1').setViewById('link_sample', () => (new CLabel).setText('文字連結範例1').setTextColor('red')),
                    (new CLinkLabel).setText('link2').setViewById('link_sample', () => (new CLabel).setText('文字連結範例2').setTextColor('green')),
                    (new CLinkLabel).setText('link3').setViewById('link_sample', () => (new CLabel).setText('文字連結範例3').setTextColor('blue')),
                    (new CStackH).setId('link_sample').setChildren([
                        (new CLabel).setText('replace content here').setBackground('#EEE'),
                    ])
                ])
            `),
        ]),
    ])
}