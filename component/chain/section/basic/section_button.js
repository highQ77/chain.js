import { CButton } from "../../basic/CButton.js";
import { CLabel } from "../../basic/CLabel.js";
import { CTextarea } from "../../basic/CTextarea.js";
import { CContainer } from "../../layout/CContainer.js";
import { CEmpty } from "../../layout/CEmpty.js";
import { CStackV } from "../../layout/CStackV.js";

export function section_button() {
    return (new CStackV).setChildren([
        (new CLabel).setText('CButton examples').setFontSize(18).setBold(),
        (new CLabel).setText('多種按鈕呈現範例'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CContainer).setClasses(['border', 'p-3']).setChildren([
                (new CButton).setLabel('primary').setColCountByBP('md', 2).setClasses(['btn-primary']),
                (new CButton).setLabel('secondary').setColCountByBP('md', 2).setClasses(['btn-secondary']),
                (new CButton).setLabel('success').setColCountByBP('md', 2).setClasses(['btn-success']),
                (new CButton).setLabel('danger').setColCountByBP('md', 2).setClasses(['btn-danger']),
                (new CButton).setLabel('warning').setColCountByBP('md', 2).setClasses(['btn-warning']),
                (new CButton).setLabel('info').setColCountByBP('md', 2).setClasses(['btn-info']),
                (new CButton).setLabel('light').setColCountByBP('md', 2).setClasses(['btn-light']),
                (new CButton).setLabel('dark').setColCountByBP('md', 2).setClasses(['btn-dark']),
                (new CButton).setLabel('white').setColCountByBP('md', 2).setClasses(['btn-white']),
                (new CButton).setLabel('transparent').setColCountByBP('md', 2),
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CContainer).setClasses(['border', 'p-3']).setChildren([
                    (new CButton).setLabel('primary').setColCountByBP('md', 2).setClasses(['btn-primary']),
                    (new CButton).setLabel('secondary').setColCountByBP('md', 2).setClasses(['btn-secondary']),
                    (new CButton).setLabel('success').setColCountByBP('md', 2).setClasses(['btn-success']),
                    (new CButton).setLabel('danger').setColCountByBP('md', 2).setClasses(['btn-danger']),
                    (new CButton).setLabel('warning').setColCountByBP('md', 2).setClasses(['btn-warning']),
                    (new CButton).setLabel('info').setColCountByBP('md', 2).setClasses(['btn-info']),
                    (new CButton).setLabel('light').setColCountByBP('md', 2).setClasses(['btn-light']),
                    (new CButton).setLabel('dark').setColCountByBP('md', 2).setClasses(['btn-dark']),
                    (new CButton).setLabel('white').setColCountByBP('md', 2).setClasses(['btn-white']),
                    (new CButton).setLabel('transparent').setColCountByBP('md', 2),
                ])
            `),
        ]),
    ])
}