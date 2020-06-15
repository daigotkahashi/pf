var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        cards: [
            {
                label: ["html&css", "javascript"],
                title: "イプロス製造業",
                description: "以前の出向先の自社サイト。\n主にhtml、scssを用いたコーディングや、ABテストのためのスクリプトを記述したりしています。",
                image: "img/ipros.png",
                url: "https://www.ipros.jp/"
            },
            {
                label: ["html&css", "javascript"],
                title: "伊勢丹案件01",
                description: "初めて実務でvue.jsを使用しました。\n「ぜひこちらの項目を〜」のボタンを押すと表示される部分をvueで実装しました。",
                image: "img/kashi.png",
                url: "https://cp.mistore.jp/common/event_calendar/christmas_collection/2019/07.html"
            },
            {
                label: ["html&css", "javascript"],
                title: "伊勢丹案件02",
                description: "画面下の方、写真が並んでいる部分がモーダルで開きます。\nモーダルで表示される部分や絞込み機能をvueで書いてみました。",
                image: "img/wonder.png",
                url: "https://www.isetan.mistore.jp/kyoto/event_calendar/wonderfulmarche.html"
            },
            {
                label: ["デザイン"],
                title: "個人ブログ ラフ",
                description: "デザイン、技術的な備忘録と趣味、勉強を兼ねてwordPressで制作中。\n完成したらwebデザイナーの妻と一緒に更新する予定",
                image: "img/blog.png",
                url: "https://xd.adobe.com/view/c5cdb85d-efcb-4b12-63c6-5d2fd875b89f-b3fc/grid/"
            },
            {
                label: ["デザイン"],
                title: "テスト用",
                description: "機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用",
                image: "https://placehold.jp/150x150.png",
            },
            {
                label: ["html&css"],
                title: "小田急不動産",
                description: "一年ほど前、初めての現場に入った直後にコーディングをしたサイトです。\n下層4ページ含む。レスポンシブ対応",
                image: "img/leafia.png",
                url: "https://www.odakyu-leafia.jp/life/"
            }
        ],
        selectCategoly: ["html&css", "javascript", "デザイン"],
        checkedCategoly: []
    },
    computed: {
        matched: function () {
            return this.cards.filter((el) => {

            }, this)
        },
    },
    methods: {
        checked: function (event) {
            var delay = function () {
                // チェックボックスの兄弟要素のテキストを取得
                var checkedCategoryText = [];
                var checkedCategory = document.querySelectorAll("input[name='work-title']:checked");
                for (let i = 0; i < checkedCategory.length; i++) {
                    checkedCategoryText[i] = checkedCategory[i].nextElementSibling.nextElementSibling.innerText;
                }

                loop:for (let i = 0; i < this.app.cards.length; i++) {
                    for (let j = 0; j < app.cards[i].label.length; j++) {
                        for (let k = 0; k < checkedCategoryText.length; k++) {
                            if (app.cards[i].label[j]==checkedCategoryText[k]) {
                                document.getElementsByClassName("spin__card")[i].style.display="block";
                                continue loop;
                            }else {
                                document.getElementsByClassName("spin__card")[i].style.display="none";
                            }
                        }
                    }
                }

                // チェックが入ってなかったら全表示
                if(!checkedCategoryText.length) {
                    for (let i = 0; i < this.app.cards.length; i++) {
                        document.getElementsByClassName("spin__card")[i].style.display="block";
                    }
                }

            }

            setTimeout(delay, 1)


        }
    }
})