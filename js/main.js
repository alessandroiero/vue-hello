'use strict';

const { createApp } = Vue

const firstVue = createApp({
    data() {
        return {
            title: "Hello World",
            img:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.FJ-KnTJk7zCREJeQogSaIAHaDi%26pid%3DApi&f=1&ipt=74799f683966518f15372b06d7c72eb7639698503e649daa5b5b92c7574e077a&ipo=images'
        }
    }
})

firstVue.mount("#app")