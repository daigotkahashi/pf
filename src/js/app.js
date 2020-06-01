var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        cards:[
            {
                label:["html&css"],
                title:"小田急不動産",
                description:"一年ほど前、初めての現場に入った直後にコーディングをしたサイトです。\n下層4ページ含む。レスポンシブ対応",
                image:"img/leafia.png",
                url:"https://www.odakyu-leafia.jp/life/"
            },
            {
                label:["html&css","javascript"],
                title:"イプロス製造業",
                description:"以前の出向先の自社サイト。\n主にhtml、scssを用いたコーディングや、ABテストのためのスクリプトを記述したりしています。",
                image:"img/ipros.png",
                url:"https://www.ipros.jp/"
            },
            {
                label:["html&css","javascript"],
                title:"伊勢丹案件01",
                description:"初めて実務でvue.jsを使用しました。\n「ぜひこちらの項目を〜」のボタンを押すと表示される部分をvueで実装しました。",
                image:"img/kashi.png",
                url:"https://cp.mistore.jp/common/event_calendar/christmas_collection/2019/07.html"
            },
            {
                label:["html&css","javascript"],
                title:"伊勢丹案件02",
                description:"画面下の方、写真が並んでいる部分がモーダルで開きます。\nモーダルで表示される部分や絞込み機能をvueで書いてみました。",
                image:"img/wonder.png",
                url:"https://www.isetan.mistore.jp/kyoto/event_calendar/wonderfulmarche.html"
            },{
                label:["デザイン"],
                title:"テスト用",
                description:"機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用機能のテスト用",
                image:"https://placehold.jp/150x150.png",
            }
        ],
        selectCategoly:["html&css","javascript","デザイン"]
    },
    computed: {
        matched: function() {
            return this.cards.filter((el) => {
                return el.price <= this.budjet
            },this)
        },
        limited: function() {
            return this.matched.slice(0, this.limit)
        }
})