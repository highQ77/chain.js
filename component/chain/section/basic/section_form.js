import { CButton } from "../../basic/CButton.js";
import { CForm } from "../../basic/CForm.js";
import { CInputText } from "../../basic/CInputText.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CContainer } from "../../layout/CContainer.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_form() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CForm examples').setFontSize(18).setBold(),
        (new CLabel).setText('表單範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CContainer).setClasses(['border', 'p-3']).setChildren([
                (new CForm).setId('form').setAction(location.href).setMethod('post').setChildren([
                    (new CStackV).setGap(2).setChildren([
                        (new CInputText).setName('form_sample').setContent('form sample'),
                        (new CButton).setLabel('submit').on('click', () => {
                            document.getElementById('form').submit()
                        })
                    ])
                ])
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CContainer).setClasses(['border', 'p-3']).setChildren([
                    (new CForm).setId('form').setAction(location.href).setMethod('post').setChildren([
                        (new CStackV).setGap(2).setChildren([
                            (new CInputText).setName('form_sample').setContent('form sample'),
                            (new CButton).setLabel('submit').on('click', () => {
                                document.getElementById('form').submit()
                            })
                        ])
                    ])
                ])
            `),
        ]),
    ])
}