import { CDivImage } from "../../basic/CDivImage.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CContainer } from "../../layout/CContainer.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_divimage() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CDivImage examples').setFontSize(18).setBold(),
        (new CLabel).setText('div圖片呈現範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CContainer).setClasses(['border', 'p-3']).setChildren([
                (new CDivImage).setColCount(3).setSource('./assets/img/booksea.png').setMode('auto').setHeight(200).setChildren([
                    (new CLabel).setText('auto').setTextColor('white').setBackground('rgba(0,0,0,.5)'),
                ]),
                (new CDivImage).setColCount(3).setSource('./assets/img/booksea.png').setMode('cover').setChildren([
                    (new CLabel).setText('cover').setTextColor('white').setBackground('rgba(0,0,0,.5)'),
                ]),
                (new CDivImage).setColCount(3).setSource('./assets/img/booksea.png').setMode('contain').setChildren([
                    (new CLabel).setText('contain').setTextColor('white').setBackground('rgba(0,0,0,.5)'),
                ]),
                (new CDivImage).setColCount(3).setSource('./assets/img/booksea.png').setMode('full').setChildren([
                    (new CLabel).setText('full').setTextColor('white').setBackground('rgba(0,0,0,.5)'),
                ]),
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CContainer).setClasses(['border', 'p-3']).setChildren([
                    (new CDivImage).setColCount(3).setSource('./assets/img/booksea.png').setMode('auto').setHeight(200).setChildren([
                        (new CLabel).setText('auto').setTextColor('white').setBackground('rgba(0,0,0,.5)'),
                    ]),
                    (new CDivImage).setColCount(3).setSource('./assets/img/booksea.png').setMode('cover').setChildren([
                        (new CLabel).setText('cover').setTextColor('white').setBackground('rgba(0,0,0,.5)'),
                    ]),
                    (new CDivImage).setColCount(3).setSource('./assets/img/booksea.png').setMode('contain').setChildren([
                        (new CLabel).setText('contain').setTextColor('white').setBackground('rgba(0,0,0,.5)'),
                    ]),
                    (new CDivImage).setColCount(3).setSource('./assets/img/booksea.png').setMode('full').setChildren([
                        (new CLabel).setText('full').setTextColor('white').setBackground('rgba(0,0,0,.5)'),
                    ]),
                ])
            `),
        ]),
    ])
}