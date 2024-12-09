import { CButton } from "../basic/CButton.js"
import { CLabel } from "../basic/CLabel.js"
import { CTextarea } from "../basic/CTextarea.js"
import { CEmpty } from "../layout/CEmpty.js"
import { CStackH } from "../layout/CStackH.js"
import { CStackV } from "../layout/CStackV.js"

export function section_home() {
    return (new CStackV).setChildren([
        (new CLabel).setText('Welcome to Chain.js').setFontSize(18).setBold(),
        (new CLabel).setText('下方有簡單的例子展示何謂鏈式網頁建構與特色：'),
        (new CEmpty),
        (new CLabel).setText('1. 有賴於編輯器自動縮排剛好可以看清楚資料層級結構'),
        (new CLabel).setText('2. 所有元件皆繼承 CElementBase 類別，無法安插 CElementBase 子類以外的型別'),
        (new CLabel).setText('3. new CButton 在方法鏈中可以識別正在處理的是什麼元件，本例為按鈕'),
        (new CLabel).setText('4. 類似在撰寫 html，類比 new CButton 像是標籤名稱，而元件方法像是標籤屬性'),
        (new CLabel).setText('5. 元件進行封裝僅開放必要的 API，程式碼的繼承體制縮短開發時間，不用一直重寫方法'),
        (new CLabel).setText('6. 方法鏈有程式碼提示方便使用這選擇元件方法，相較於 html 自定義屬性無法有程式碼提示'),
        (new CLabel).setText('7. 程式碼無需編譯即可在 html 直接預覽結果，並填補 js 無法輕易直覺的建構 html 的問題'),
        (new CLabel).setText('8. 程式碼剪貼非常方便，可以複製貼上快速建立一致結構的 jsdom'),
        (new CLabel).setText('9. 依照專案客製外觀，可至 component 資料夾複製如 CButton 元件為 CButton2，並針對元件 css 調整'),
        (new CLabel).setText('10. 外觀修正方法 2，複製如 CButton 元件為 CButton2 並讓 CButton2 繼承 CButton，針對元件 css 調整'),
        (new CLabel).setText('11. 方法鏈的參數可以任意型別，且參數可以 2 個以上；相較於 html 標籤一個屬性僅能置入一個參數'),
        (new CLabel).setText('12. 繼承 CElementBase 的類別擁有 destroy 方法，在切換 jsdom (置換內容)時會遞迴呼叫子 jsdom 的 destroy 方法'),
        (new CEmpty),
        (new CStackV).setChildren([
            (new CLabel).setText('demo').setTextColor('rgb(164, 119, 255)'),
            (new CStackH).setGap(2).setClasses(['border', 'p-3']).setChildren([
                (new CButton).setLabel('A'),
                (new CButton).setLabel('B').setClasses(['ms-auto']),
                (new CButton).setLabel('C'),
            ]),
            (new CEmpty),
            (new CLabel).setText('jsdom').setTextColor('rgb(164, 119, 255)'),
            (new CTextarea).setFontSize(14).setBackground('#EEE').setContent(`
                (new CStackH).setGap(2).setChildren([
                    (new CButton).setLabel('A'),
                    (new CButton).setLabel('B').setClasses(['ms-auto']),
                    (new CButton).setLabel('C'),
                ])
            `),
        ]),

    ])
}