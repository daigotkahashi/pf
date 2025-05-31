var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        cards: [
            {
                label: ["html&css","javascript"],
                title: "ユニクロ ルーブル美術館",
                description: "jsonのデータ、pug、scssで作成しました。",
                url: "https://www.uniqlo.com/jp/ja/contents/feature/louvre-x-uniqlo/ut-collection/gallery-01/"
            },
            {
                label: ["html&css"],
                title: "ユニクロ RFページ",
                description: "ロジャーフェデラーコレクションのページです。更新を担当していました。",
                url: "https://www.uniqlo.com/jp/ja/special-feature/rf-collection"
            },
            {
                label: ["html&css","javascript"],
                title: "GU キャンペーンページ",
                description: "GUのキャンペーンページです。",
                url: "https://www.gu-global.com/jp/ja/service/stylehint/mile-campaign/"
            },
            {
                label: ["html&css","javascript"],
                title: "モーダル",
                description: "奥さんにjsを教えるために作ったサンプル。自分の中でjsを分かりやすく書けたので載せます。\n実現したかったことは\n・特定の位置（今回の場合黄色のボックス）までスクロールしたらモーダル表示\n・1回のページ読み込みに対して一度のみモーダル起動」\njsのコードはhtmlにベタがきしてあります。html、cssは適当です🙇‍♂️",
                url: "scrollModal.html"
            },
            {
                label: ["デザイン"],
                title: "個人ブログ ラフ",
                description: "デザイン、技術的な備忘録と趣味、勉強を兼ねてwordPressで制作中。\n完成したらwebデザイナーの妻と一緒に更新する予定",
                image: "img/blog.png",
                url: "https://xd.adobe.com/view/c5cdb85d-efcb-4b12-63c6-5d2fd875b89f-b3fc/grid/"
            },
            {
                label: ["html&css", "javascript"],
                title: "イプロス製造業",
                description: "以前の出向先の自社サイト。\n主にhtml、scssを用いたコーディングや、ABテストのためのスクリプトを記述したりしていました。",
                image: "img/ipros.png",
                url: "https://www.ipros.jp/",
                disabled: true
            },
            {
                label: ["javascript"],
                title: "伊勢丹案件01",
                description: "初めて実務でvue.jsを使用しました。\n「ぜひこちらの項目を〜」のボタンを押すと表示される部分をvueで実装しました。（特にvueである必要はないかもしれませんが...）\n納品後、更新することはないサイト",
                image: "img/kashi.png",
                url: "2019/07.html",
                disabled: true
            },
            {
                label: ["javascript"],
                title: "伊勢丹案件02",
                description: "画面下の方、写真が並んでいる部分がモーダルで開きます。\nモーダルで表示される部分や絞込み機能をvueで書いてみました。\n納品後、更新することはないサイト",
                image: "img/wonder.png",
                url: "isetan1.html",
                disabled: true
            },
            {
                label: ["html&css", "javascript"],
                title: "伊勢丹案件03",
                description: "スクロールスパイ（スクロールすると現在地に応じてナビゲーションがアクティブになる）を実装しました。\n何故か機能完成前に納品になったのでナビゲーションクリック後の挙動が少しおかしいです。。。\n納品後、更新することはないサイト",
                image: "img/ise_app.png",
                url: "https://cp.mistore.jp/common/service/miapp/main.html",
                disabled: true
            },
            {
                label: ["html&css","javascript"],
                title: "DMM-QNTM",
                description: "VliverのLP 11ty、EJSを使って作成",
                image: "img/qntm.png",
                url: "https://qntm.dmm.com/",
                disabled: true
            },
            {
                label: ["html&css","javascript"],
                title: "GU なにわ男子",
                description: "GUとなにわ男子のコラボサイト",
                url: "https://www.gu-global.com/jp/ja/feature/gu-naniwadanshi/",
                disabled: true
            },
            {
                label: ["html&css","javascript"],
                title: "ユニクロ トトロ",
                description: "ユニクロとトトロのコラボサイト",
                url: "https://www.uniqlo.com/th/th/contents/feature/my-style-my-ghibli/",
                disabled: true
            },
            {
                label: ["html&css"],
                title: "小田急不動産",
                description: "2年前、初めての現場に入った直後にコーディングをしたサイトです。\n下層4ページ含む。レスポンシブ対応",
                image: "img/leafia.png",
                url: "https://www.odakyu-leafia.jp/life/",
                disabled: true
            },
            {
                label: ["デザイン"],
                title: "テスト用",
                description: "機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用",
                image: "https://placehold.jp/150x150.png",
                disabled: true
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