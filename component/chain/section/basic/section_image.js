import { CImage } from "../../basic/CImage.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CContainer } from "../../layout/CContainer.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_image() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CImage examples').setFontSize(18).setBold(),
        (new CLabel).setText('多種圖片形式呈現範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CContainer).setClasses(['border', 'p-3']).setChildren([
                (new CImage).setColCount(6).setSource('./assets/img/booksea.png').setFluid(),
                (new CImage).setColCount(6).setSource('./assets/img/booksea.png').setThumbnail(),
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CContainer).setClasses(['border', 'p-3']).setChildren([
                    (new CImage).setColCount(6).setSource('./assets/img/booksea.png').setFluid(),
                    (new CImage).setColCount(6).setSource('./assets/img/booksea.png').setThumbnail(),
                ])
            `),
        ]),
    ])
}